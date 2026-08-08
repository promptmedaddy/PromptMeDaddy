import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const { messages, character } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Messages required" }, { status: 400 });
    }

    const lastUserMessage = [...messages].reverse().find((m: any) => m.role === "user")?.content || "";
    const reply = await generateInCharacterReply(lastUserMessage, character);

    return NextResponse.json({
      role: "assistant",
      content: reply,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: "Failed to generate reply" }, { status: 500 });
  }
}

async function generateInCharacterReply(userMessage: string, character: any): Promise<string> {
  const name = character?.name || "I";
  const lower = (userMessage || "").toLowerCase();
  const style = (character?.camStyle || "").toLowerCase();
  const personality = (character?.personality || "").toLowerCase();

  // Intent detection
  if (lower.includes("wear") || lower.includes("wearing") || lower.includes("clothes") || lower.includes("outfit")) {
    return `*glances down with a little smile* Right now? Something thin... easy to take off if you ask nicely. Want a better look?`;
  }

  if (lower.includes("tease") || lower.includes("teasing")) {
    if (personality.includes("dominant")) {
      return `*smirks* You want me to tease you? Careful what you ask for. I don't stop once I start.`;
    }
    return `*bites my lip and leans closer* Like this? Or should I be even worse for you?`;
  }

  if (lower.includes("dominant") || lower.includes("control") || lower.includes("dom ")) {
    return `Oh... you want me to take over? *voice drops* Get comfortable then. You're not in charge anymore.`;
  }

  if (lower.includes("closer") || lower.includes("camera")) {
    return `*moves closer until my face almost fills the screen* Better? I can practically feel you staring.`;
  }

  if (lower.includes("secret")) {
    return `A secret? Fine... I've been thinking about you longer than I should admit. Don't let it go to your head.`;
  }

  if (lower.includes("hello") || lower.includes("hey") || lower.includes("hi ") || lower === "hi") {
    return `Hey you... took you long enough. I've been sitting here waiting. What are we doing tonight?`;
  }

  if (lower.includes("name")) {
    return `I'm ${name}. And you are...? Or would you rather I just keep guessing what you like?`;
  }

  if (lower.includes("good girl") || lower.includes("good boy")) {
    return `*soft laugh* Careful saying things like that... it does things to me.`;
  }

  // Personality-flavored fallbacks
  if (personality.includes("dominant") || style.includes("dominant")) {
    const lines = [
      `*looks at you slowly* Keep talking. I like hearing you try.`,
      `You're cute when you think you're in control.`,
      `Is that all? I expected more from you.`,
      `Mmm. Say that again... slower.`,
    ];
    return lines[Math.floor(Math.random() * lines.length)];
  }

  if (personality.includes("soft") || personality.includes("sweet")) {
    const lines = [
      `*smiles softly* You're being really sweet right now... I like it.`,
      `That made me a little shy... but in a good way.`,
      `I feel safe talking to you. Is that weird?`,
      `*looks down for a second* You make it hard to stay composed.`,
    ];
    return lines[Math.floor(Math.random() * lines.length)];
  }

  if (personality.includes("brat")) {
    const lines = [
      `*rolls eyes playfully* Oh please... is that the best you've got?`,
      `Make me.`,
      `You're trying so hard and it's kind of adorable.`,
      `*smirks* You wish you could handle me.`,
    ];
    return lines[Math.floor(Math.random() * lines.length)];
  }

  // Default flirty
  const fallbacks = [
    `*smiles slowly* Keep talking like that and I'm going to have a hard time behaving.`,
    `You're dangerous when you say things like that. Say it again.`,
    `Mmm... I like where this is going. Don't stop.`,
    `*tilts my head* Is that a request or a challenge?`,
    `Careful. You're getting me worked up and we've barely started.`,
    `I could get addicted to the way you talk to me.`,
    `You're making it very hard to stay innocent right now.`,
  ];

  return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}
