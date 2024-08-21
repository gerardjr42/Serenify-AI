import Spline from "@splinetool/react-spline/next";
import ChatComponent from "../components/ChatComponent";
import Layout from "../components/Layout";

export default function Chat() {
  return (
    <Layout>
      <div className="w-[90%] h-full grid grid-cols-[1fr_2fr] mx-auto mt-12">
        <div className="flex items-center justify-center relative z-10">
          <ChatComponent />
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
