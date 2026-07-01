const U200D = String.fromCharCode(8205)
const UFE0Fg = /\uFE0F/g

export function getIconCode(char: string) {
  return toCodePoint(char.indexOf(U200D) < 0 ? char.replace(UFE0Fg, "") : char)
}

function toCodePoint(unicodeSurrogates: string) {
  const r = []
  let c = 0,
    p = 0,
    i = 0

  while (i < unicodeSurrogates.length) {
    c = unicodeSurrogates.charCodeAt(i++)
    if (p) {
      r.push((65536 + ((p - 55296) << 10) + (c - 56320)).toString(16))
      p = 0
    } else if (55296 <= c && c <= 56319) {
      p = c
    } else {
      r.push(c.toString(16))
    }
  }
  return r.join("-")
}

type EmojiMap = {
  codePointToName: Record<string, string>
  nameToBase64: Record<string, string>
}

let emojimap: EmojiMap | undefined = undefined
export async function loadEmoji(code: string) {
  if (!emojimap) {
    const data = await import("./emojimap.json")
    emojimap = data
  }

  // 맵에 없는 이모지(예: 키캡 #️⃣)는 OG 이미지 빌드를 깨뜨리지 않도록 투명 픽셀로 대체
  const TRANSPARENT_PNG =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="

  const name = emojimap.codePointToName[`${code.toUpperCase()}`]
  if (!name) {
    console.warn(`emoji codepoint ${code} not found in map — skipping`)
    return TRANSPARENT_PNG
  }

  const b64 = emojimap.nameToBase64[name]
  if (!b64) {
    console.warn(`emoji name ${name} not found in map — skipping`)
    return TRANSPARENT_PNG
  }

  return b64
}
