import { Divider } from "antd";
import FAQs from "./faqs";
import HelpCenter from "./help-center";

export default function Assistance() {
    return (
        <>
            <h5 className="text-2xl">Assistance</h5>
            <HelpCenter />
            <FAQs />
            <Divider />
        </>
    )
}