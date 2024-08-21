import Spline from "@splinetool/react-spline/next";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="w-[90%] h-screen grid grid-cols-[1fr_2fr] gap-8 mx-auto overflow-hidden">
        <div className="flex items-center justify-center">
          <div className="text-left max-w-xl p-8">
            <h2 className="text-purple-700 text-6xl font-bold mb-2 font-serif">
              Serenify.
            </h2>
            <h1 className="text-white text-5xl font-bold mb-6 leading-tight">
              <p>Your personal</p>
              <p>AI therapist</p>
            </h1>
            <p className="text-gray-400 text-xl mb-8 max-w-md">
              24/7 support, personalized guidance, and a judgment-free space for
              your mental wellness journey.
            </p>
          </div>
        </div>
        <div className="relative flex items-center justify-center h-full overflow-hidden">
          <div className="w-full h-full">
            <Spline scene="https://prod.spline.design/6nHbXNojOn8UGSpN/scene.splinecode" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
