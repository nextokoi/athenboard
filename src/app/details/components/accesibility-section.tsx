import { Divider, Typography } from "keep-react"
import { ButtonComponent } from "@/app/components/ui/button"

export const AccesibilitySection = () => {
    return (
        <div className="pr-5">
            <Divider />
            <div className="flex flex-col gap-3 py-5">
                <Typography variant="heading-6">Accesibility</Typography>
                <Typography variant="body-2" className="text-pretty">
                    Free entry for individuals assisting participants with functional diversity.
                </Typography>
                <ButtonComponent title="Show all benefits" width="full" bgColor="#3B6939"/>
            </div>
            <Divider />
        </div>
    )
}