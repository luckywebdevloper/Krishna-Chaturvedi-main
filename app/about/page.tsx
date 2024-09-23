import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckIcon,  } from "lucide-react";
import Image from "next/image";
import krishna from "@/public/krishna_2.jpg";
import Link from "next/link";
const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                alt="Musician Name"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="600"
                src={krishna}
                width="600"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    About Krishna Chaturvedi
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Krishna Chaturvedi is a multi-talented artist known for
                    their unique blend of genres and captivating performances.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4" />
                    <span>Grammy-nominated artist</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4" />
                    <span>5 studio albums</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4" />
                    <span>Sold-out world tours</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#">
                    <Button>Listen Now</Button>
                  </Link>
                  <Link href="#">
                    <Button variant="outline">View Discography</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Biography
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                The story of Krishna Chaturvedi's, journey to musical stardom is
                shining example of determination, devotion, and firm
                self-belief!
              </p>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Can his inspiring story ignite the spark within you to chase
                your own dreams? Let s get to know!
              </p>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Krishna Chaturvedi, born and brought up in Rewa, Madhya Pradesh,
                belongs to a middle-class family, where his father, Vansh
                Bahadur Chaturvedi, is a farmer by profession, and his mother,
                Asha Chaturvedi, is a housewife. Being a star singer of the
                Bhajan industry, his passion and dedication has inspired
                countless fans, proving that with strong faith in oneself and
                unmatched hard work, even the humble beginnings can lead to
                extraordinary success.
              </p>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Talking about his family, Krishna s father, holds Post
                Graduation degree but still devoted his life to farming. His
                father s dream for Krishna was to secure a stable government
                job. However, Krishna's heart was captivated by music from an
                early age, a passion perhaps inspired by his grandfather s love
                for melodies and the presence of a harmonium in their home.
              </p>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Krishna started his official music studies in Indore. He became
                a member of Pancham Nishad Sangeet Sansthan and refined his
                skills under the guidance of Shrimati Shobha Chaudhari.
                Balancing his music classes with a modest job, Krishna
                frequently experienced financial hardships, sometimes eating
                only one meal a day to save money.
              </p>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                The pandemic brought additional challenges, yet it also provided
                a period of introspection.
              </p>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                After the lockdowns, Krishna performed at cafes and small
                gatherings. His break came during a Navratri event when Pankaj
                Rathore, a fellow artist, recognized his talent and offered to
                record a song with him. Their collaboration led to "Mera Malik
                Hai Shivay," which initially struggled to gain an audience.
              </p>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                The breakthrough came when Krishna reached out to Yash Guruji,
                an influencer, to promote his song. The track quickly went
                viral, gaining significant attention on social media. This
                success paved the way for further collaborations, establishing
                Krishna as a prominent figure in bhajan music.
              </p>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                His musical releases like "Durr Na Hona Shambhu" and "Bhajman
                Radhe," have grown his reputation. “I strongly believe in
                Mahadev as my guiding light and aim to take Bhajans to
                international level, says Krishna Chaturvedi, renowned singer!”
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">
              Upcoming Shows
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold">New York City</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Madison Square Garden
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    July 15, 2023
                  </p>
                  <Button className="mt-4">Get Tickets</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold">Los Angeles</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Hollywood Bowl
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    August 2, 2023
                  </p>
                  <Button className="mt-4">Get Tickets</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold">London</h3>
                  <p className="text-gray-500 dark:text-gray-400">O2 Arena</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    September 10, 2023
                  </p>
                  <Button className="mt-4">Get Tickets</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default page;
