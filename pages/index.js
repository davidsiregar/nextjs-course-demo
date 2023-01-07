import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

// const DUMMY = [
//   {
//     id: "m1",
//     title: "A first meetup",
//     image:
//       "https://imageio.forbes.com/specials-images/imageserve/632d891161b9efabbc7d2c23/0x0.jpg?format=jpg&crop=2200,1232,x398,y0,safe&width=1200",
//     address: "Jln sesama",
//     description: "This is a first meetup",
//   },
//   {
//     id: "m2",
//     title: "A second meetup",
//     image: "https://media.timeout.com/images/105240237/image.jpg",
//     address: "Jln sesama",
//     description: "This is a second meetup",
//   },
// ];

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="browse a huge list of highly active react "
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: { meetups: DUMMY },
//   };
// }

export async function getStaticProps() {
  //fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://admin_nextjs:test123@nodejs.n2vas.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
export default HomePage;
