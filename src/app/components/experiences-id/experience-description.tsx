import { Divider } from "antd"

export const ExperienceDescription = ({ description } : {description: string}) => {
    
    return (
        <div className="pr-5">
            <div className="flex flex-col gap-3 py-5">
                <h6 className="text-heading-6 font-medium">What you will do</h6>
                <p className="text-body-2text-pretty">{description}</p>
                <p className="text-body-4 font-bold">More info</p>
            </div>
            <Divider />
        </div>
    )
}