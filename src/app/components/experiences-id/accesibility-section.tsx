import { Divider } from "keep-react"
import { ButtonComponent } from "@/app/components/ui/button"

export const AccesibilitySection = () => {
    return (
        <div className="pr-5">
            <Divider />
            <div className="flex flex-col gap-3 py-5">
                <h6 className="font-medium text-heading-6">Accesibility</h6>
                <p className="text-pretty text-body-4">
                    Free entry for individuals assisting participants with functional diversity.
                </p>
                <ButtonComponent title="Show all benefits" width="full" bgColor="#3B6939"/>
            </div>
            <Divider />
        </div>
    )
}