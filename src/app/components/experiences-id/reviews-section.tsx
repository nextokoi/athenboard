"use client"

import { HorizontalScroll } from "@/app/components/horizontal-scroll";
import { AvatarComponent } from "../ui/avatar";
import { Button } from "keep-react";
import { Drawer } from "../ui/drawer";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";

interface User {
  id: string
  name: string
  avatar_url: string
}

interface ReviewData {
  score: number
  content: string
  created_at: string
  id: string
  user: User
}

interface ReviewProps {
  data: ReviewData[]
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

export const ReviewsSection = ({ data }: ReviewProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true)
  const handleOpenDrawer = () => {
    setIsDrawerOpen(true)
  }

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false)
  }
  const renderReviews = () => {
    return data.map((review) => {
      const user = review.user
      const date = formatedDate(review.created_at)
      return (
        <div key={review.id}>
          <div className="flex items-center gap-6 mb-3">
            <AvatarComponent image={user.avatar_url}/>
            <div>
              <h6 className="text-heading-6 font-medium">{user.name}</h6>
              <p className="text-body-4">{date}</p>
            </div>
          </div>
          <div className="text-balance">{review.content}</div>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col gap-3 py-5">
      <h6 className="text-heading-6 font-medium">⭐5(100 reviews)</h6>
      <HorizontalScroll>
        {data.length > 0 ? renderReviews() : <p>No reviews yet. Be the first!</p>}
      </HorizontalScroll>
      <div className="pr-5">
        <Button className="w-full" color="success" onClick={handleOpenDrawer}>
          Show more reviews
        </Button>
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}>
        <div className="flex gap-3">
          <FaStar className="text-4xl"/>
          <h4 className="text-heading-5">5(100 reviews)</h4>
        </div>
      </Drawer>
    </div>
  );
};
