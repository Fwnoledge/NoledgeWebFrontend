import PostHome from '@/src/components/PostHome'
import HomeForm from '@/src/components/HomeForm'
import {posts} from "@/src/config/data";

export default function Home() {

    return (
        <main className="">
            <div className="bg-white py-4">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl m-4">

                        <HomeForm/>

                        {
                            posts.map((post, index) => (
                                <PostHome key={index} {...post}/>
                            ))
                        }

                    </div>
                </div>
            </div>
        </main>
    )
}

