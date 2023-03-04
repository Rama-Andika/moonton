import { Link } from "@inertiajs/inertia-react";


const MovieCard = ({ slug, img, name, category }) => {
    return (
        <div className="relative group overflow-hidden pr-[20px] ">
            <img
                src={img}
                className="object-cover rounded-[30px] h-[340px] w-[250px]"
                alt=""
            />
            <div className="absolute bottom-0 left-0 right-0  from-black rounded-bl-[28px] rounded-br-[28px]">
                <div className="px-7 pb-7">
                    <div className="font-medium text-xl text-white">{name}</div>
                    <p className="mb-0 text-gray-300 text-base mt-[10px]">
                        {category}
                    </p>
                </div>
            </div>
            <Link href={route('prototype.movie.show', slug)}>
                <div
                    className="absolute top-1/2 left-1/2 -translate-y-[500px] group-hover:-translate-y-1/2
                                -translate-x-1/2 z-20 transition ease-in-out duration-500"
                >
                    <img
                        src="/icons/ic_play.svg"
                        className=""
                        width="50"
                        alt=""
                    />
                </div>
            </Link>
        </div>
    );
};

export default MovieCard;
