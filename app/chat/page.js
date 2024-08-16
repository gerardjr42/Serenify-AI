import ChatComponent from "../components/ChatComponent";
import Layout from "../components/Layout";

export default function Chat() {
  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-white text-2xl mb-4">Chat with Serenify</h1>
        <ChatComponent />
      </div>
    </Layout>
  );
}
