"use client"

import { HorizontalScroll } from "@/app/components/horizontal-scroll";
import { AvatarComponent } from "../ui/avatar";
import { Button, Modal, Spin, message } from "antd";
import { Drawer } from "../ui/drawer";
import { useState } from "react";
import { FaChevronLeft, FaStar } from "react-icons/fa6";
import { Input } from "antd";
import { useRouter } from "next/navigation";
import { FaRegTrashCan } from "react-icons/fa6";
import { createClient } from "@/app/utils/supabase/client";

interface User {
  sub: string
  user_name: string
  avatar_url: string
}

interface ReviewData {
  score: number
  content: string
  created_at: string
  id: string
  user: User
  user_id: string
}

interface ReviewProps {
  reviews: ReviewData[]
  user: User | null
  experienceId: string
}

const formatedDate = (date: string) => {
  const newDate = new Date(date)
  const formattedDate = newDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const formattedTime = newDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric'
  })

  return `${formattedDate} - ${formattedTime}`
}

const { TextArea } = Input

export const ReviewsSection = ({ reviews, experienceId, user }: ReviewProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [reviewContent, setReviewContent] = useState('')
  const [loading, setLoading] = useState(false)
  const [messageApi, contextHolder] = message.useMessage()

  const router = useRouter()
  const supabase = createClient()

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true)
  }

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false)
  }

  const showModal = () => {
    if (!user) {
      messageApi.info('You must be logged in to add a review')
      return
    }
    setIsModalOpen(true)
  }

  const handleOk = async () => {
    setLoading(true)
    try {
      const { error } = await supabase
        .from('reviews')
        .insert([
          {
            content: reviewContent,
            user_id: user?.sub,
            experience_id: experienceId
          }
        ])
      if (error) throw error
    } catch (error) {
        console.error('Error inserting review: ', error)
    } finally {
      setLoading(false)
      setIsModalOpen(false)
      setReviewContent('')
      router.refresh()
    }
  }

  const handleRemove = async (reviewId: string) => {
    try {
      const { error } = await supabase
        .from('reviews')
        .delete()
        .eq('id', reviewId)
        .eq('user_id', user?.sub)
      if (error) throw error
      router.refresh()
    } catch (error){
      console.error('Error removing review: ', error)
    }
  }

  const handleCancel = () => {
    setIsModalOpen(false)
    setReviewContent('')
  }


  const renderReviews = () => {
    return reviews.map((review) => {
      const user = review.user
      const date = formatedDate(review.created_at)
      return (
        <div key={review.id}>
          <div className="flex items-center gap-6 mb-3">
            <AvatarComponent image={user.avatar_url}/>
            <div>
              <h6 className="text-heading-6 font-medium">{user.user_name}</h6>
              <p className="text-body-4">{date}</p>
            </div>
            { user && user.sub === review.user_id &&
            <Button type="text" onClick={() => handleRemove(review.id)}>
              <FaRegTrashCan className="text-lg" />
            </Button>
            }
          </div>
          <div className="text-pretty">{review.content}</div>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col gap-3 py-5">
      {contextHolder}
      <div className="flex items-center gap-3">
          <FaStar className="text-3xl"/>
          <h6 className="text-heading-6">5 (100 reviews)</h6>
      </div>
      <HorizontalScroll>
        {loading ? <Spin /> : (reviews.length > 0 ? renderReviews() : <p>No reviews yet. Be the first!</p>)}
      </HorizontalScroll>
      <div className="pr-5">
        <Button className="w-full " color="success" onClick={handleOpenDrawer}>
          Show more reviews
        </Button>
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}>
        <div className="p-8 flex flex-col h-full justify-between">
          <div>
            <header className="flex flex-col gap-5">
              <Button type="text" className="p-2 w-fit text-[#171D1E]" onClick={handleCloseDrawer}>
                <FaChevronLeft className="text-2xl"/>
              </Button>
              <div className="flex items-center gap-3">
                <FaStar className="text-3xl"/>
                <h6 className="text-heading-6">5 (100 reviews)</h6>
              </div>
            </header>
            <main className="mt-10">
              {loading ? <Spin /> : (reviews.length > 0 ? renderReviews() : <p>No reviews yet. Be the first!</p>)}  
            </main>
          </div>
          <footer>
            <Modal title="Feedback" centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <p className="mb-2">You're logged as <span className="font-medium">{user?.user_name}</span></p>
              <TextArea rows={4} placeholder="Write a review" autoSize={{ minRows: 6 }} value={reviewContent} onChange={(e) => setReviewContent(e.target.value)}/>
            </Modal>
            <Button type="primary" className="w-full p-8" onClick={showModal}>Add review</Button>
          </footer>
        </div>
      </Drawer>
    </div>
  );
};
