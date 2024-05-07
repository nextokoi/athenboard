import { ButtonComponent } from "@/app/components/ui/button";
import { HorizontalScroll } from "@/app/components/horizontal-scroll";
import { AvatarComponent } from "../ui/avatar";

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
        <ButtonComponent
          title="Show more reviews"
          width="full"
          bgColor="#3B6939"
        />
      </div>
    </div>
  );
};
