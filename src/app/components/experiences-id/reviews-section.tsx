import { ButtonComponent } from "@/app/components/ui/button";
import { HorizontalScroll } from "@/app/components/horizontal-scroll";
import { AvatarComponent } from "../ui/avatar";

interface ReviewProps {
  data: any;
}
export const ReviewsSection = ({ data }: ReviewProps) => {
  const renderReviews = () => {
    return data.map((review: any) => {
      return (
        <div key={review.id}>
          <div className="flex items-center gap-6">
            <AvatarComponent />
            <div>
              <h6 className="text-heading-6 font-medium">Hye-Jin</h6>
              <p className="text-body-4">december 2023</p>
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
      <HorizontalScroll>{renderReviews()}</HorizontalScroll>
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
