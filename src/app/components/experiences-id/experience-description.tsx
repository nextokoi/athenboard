import { Divider } from "antd"

export const ExperienceDescription = ({ description } : {description: string}) => {
    
    return (
        <div className="pr-5 xl:mr-48">
            <div className="flex flex-col gap-3">
                <h5 className="text-2xl font-medium">What you will do</h5>
                <p className="text-lg text-pretty xl:mr-96">{description}</p>
            </div>
            <Divider />
        </div>
    )
}