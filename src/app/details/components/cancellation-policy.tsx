import { Typography } from "keep-react"

export const CancellationPolicy = () => {
    return (
        <div className="flex flex-col gap-3 py-5 pr-5">
            <div className="flex flex-col gap-3">
                <Typography variant="heading-6">Cancellation Policy</Typography>
                <Typography variant="body-2">Cancel up to 24 hours before the start time for a full refund</Typography>
            </div>
        </div>
    )
}