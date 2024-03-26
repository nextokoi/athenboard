import { Typography } from "keep-react"
import { ButtonComponent } from "@/app/components/ui/button"

export const AccesibilitySection = () => {
    return (
        <div>
            <Typography variant="heading-6">Accesibility</Typography>
            <Typography variant="body-2">
                Free entry for individuals assisting participants with functional diversity.
            </Typography>
            <ButtonComponent title="Show all benefits" width="full" bgColor="#3B6939"/>
        </div>
    )
}