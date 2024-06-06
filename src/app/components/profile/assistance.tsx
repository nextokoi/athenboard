import { Button, Divider } from "keep-react";
import FAQs from "./faqs";
import HelpCenter from "./help-center";

export default function Assistance() {
    return (
        <>
            <h6 className="text-heading-6">Assistance</h6>
            <HelpCenter />
            <FAQs />
            <Divider className="border border-slate-300 my-5" />
        </>
    )
}