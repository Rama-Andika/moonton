import AuthenticatedLayout from "@/Layouts/authenticated/Index";

import FeatureMovie from "@/Components/FeatureMovie";
import { Head, Link } from "@inertiajs/inertia-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MovieCard from "@/Components/MovieCard";

const Dashboard = () => {
    // function SampleNextArrow(props) {
    //     const { className, style, onClick } = props;
    //     return (
    //         <div
    //             className={className}
    //             style={{ ...style, background: "grey" }}
    //             onClick={onClick}
    //         />
    //     );
    // }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <AuthenticatedLayout>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                <title>Dashboard</title>
            </Head>
            {/* Feature Movie */}
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <div>
                    <Slider {...settings}>
                        {Array.from({ length: 5 }, (x, i) => i).map(
                            (item, index) => (
                                <FeatureMovie
                                    key={index}
                                    slug="the-batman-in-love"
                                    name="The Batman In Love"
                                    category="Action"
                                    thumbnail="/images/featured-1.png"
                                    rating={index + 2}
                                />
                            )
                        )}
                    </Slider>
                </div>
            </div>
            {/* End Feature Movie */}

            {/* Browse */}
            <div>
                <div className="font-semibold text-[22px] text-black mb-4 mt-10">
                    Browse
                </div>
                <Slider {...settings}>
                    {Array.from({ length: 6 }, (x, i) => i).map((index) => (
                        <MovieCard key={index} slug="cat" img="/images/browse-1.png" name="Cat" category="Family" />
                    ))}
                </Slider>
            </div>
            {/* End Browse */}

        </AuthenticatedLayout>
    );
};

export default Dashboard;
