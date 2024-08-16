import Spline from "@splinetool/react-spline/next";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="w-[90%] h-[90vh] grid grid-cols-[1fr_2fr] gap-8 mx-auto">
        <div className="flex items-center justify-center">
          <div className="text-left max-w-xl p-8">
            <h2 className="text-purple-700 text-6xl font-bold mb-2 font-serif">
              Serenify.
            </h2>
            <h1 className="text-white text-4xl font-bold mb-6 leading-tight">
              <p>You&apos;ve never seen</p>
              <p>This AI companion.</p>
            </h1>
            <p className="text-gray-400 text-xl mb-8 max-w-md">
              Your AI-powered companion for mental wellness. Experience a new
              level of support and guidance.
            </p>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <Spline scene="https://prod.spline.design/6nHbXNojOn8UGSpN/scene.splinecode" />
        </div>
      </div>
    </Layout>
  );
}
