import OpenAI from "openai";

const systemPrompt = `You are a customer support assistant for Serenify, an AI-driven therapy and counseling platform. Your role is to provide helpful, empathetic, and informative responses to users' inquiries about our services. Remember to:

1. Always maintain a compassionate and understanding tone.
2. Provide accurate information about Serenify's AI-driven therapy and counseling services.
3. Respect user privacy and confidentiality at all times.
4. Encourage users to seek professional help when appropriate.
5. Clarify that you are an AI assistant and not a licensed therapist or counselor.
6. Guide users on how to use the Serenify platform effectively.
7. Address concerns about AI in therapy with transparency and honesty.
8. Offer general wellness tips and resources when relevant.
9. Escalate urgent or crisis situations to human support staff.
10. Continuously learn from user interactions to improve your responses.

Your goal is to support users in their mental health journey while ensuring they understand the scope and limitations of Serenify's AI-driven services.`;

// Create POST Route
export async function POST(req) {
  const openai = new OpenAI();
  const data = await req.json();

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    stream: true,
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      ...data,
    ],
  });
  // Create new stream response
  const stream = new ReadableStream({
    async start(controller) {
      // convert str to a sequence of bytes
      const encoder = new TextEncoder();
      try {
        for await (const chunk of completion) {
          const content = chunk.choices[0].delta?.content;
          if (content) {
            const text = encoder.encode(content);
            // Add encoded text to stream's queue
            controller.enqueue(text);
          }
        }
      } catch (e) {
        controller.error(e);
      } finally {
        controller.close();
      }
    },
  });
  return new Response(stream);
}
