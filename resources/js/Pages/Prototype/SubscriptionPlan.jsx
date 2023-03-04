import Sidebar from "@/Layouts/authenticated/Sidebar";
import AuthenticatedLayout from "@/Layouts/authenticated/Index";
import { Head } from "@inertiajs/inertia-react";
import SubscriptionCard from "../../Components/SubscriptionCard";

const SubscriptionPlan = () => {
    return (
        <AuthenticatedLayout>
            <Head>
                <title>Subscription Plan</title>
            </Head>
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                <div className="flex justify-center gap-10 mt-[70px]">
                    <SubscriptionCard name="Basic" price="200.000" durationInMonth="3" features={Array.from({length:3}, (x,i)=>"Feature-"+(i+1))} />
                    <SubscriptionCard name="For Greatnes" price="800.000" durationInMonth="3" features={Array.from({length:5}, (x,i)=>"feature-"+(i+1))} isPremium />
                    
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default SubscriptionPlan;
