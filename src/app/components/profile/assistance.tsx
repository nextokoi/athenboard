import { Divider } from "antd";
import FAQs from "./faqs";
import HelpCenter from "./help-center";

export default function Assistance() {
    return (
        <>
            <h6 className="text-heading-6">Assistance</h6>
            <HelpCenter />
            <FAQs />
            <Divider />
        </>
    )
}