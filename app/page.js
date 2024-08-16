import Spline from "@splinetool/react-spline/next";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="w-full h-[90vh] grid grid-cols-[1fr_3fr] ">
        <div className="text-center flex items-center justify-center flex-col">
          <p className="text-white text-4xl font-bold">Welcome to Serenify</p>
          <p className="text-white text-xl mt-4">
            Your AI-powered companion for mental wellness
          </p>
        </div>
        <div className="">
          <Spline scene="https://prod.spline.design/6nHbXNojOn8UGSpN/scene.splinecode" />
        </div>
      </div>
    </Layout>
  );
}
