import { Divider } from "antd"

export const ExperienceDescription = ({ description } : {description: string}) => {
    
    return (
        <div className="pr-5">
            <div className="flex flex-col gap-3">
                <h5 className="text-2xl font-medium">What you will do</h5>
                <p className="text-body-2text-pretty">{description}</p>
            </div>
            <Divider />
        </div>
    )
}