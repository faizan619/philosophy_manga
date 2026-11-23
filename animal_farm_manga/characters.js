// Shared character drawings for the Animal Farm manga.
// Each chapter loads this file and uses <svg><use href="#name"/></svg>.
// Characters: major, pig, boxer, clover, mollie, benjamin, muriel, dog, cat, moses, jones, jones-angry,
//             napoleon, snowball, squealer, mrsjones, man, pilkington, frederick, whymper, minimus, wardog,
//             pig-up, squealer-up, napoleon-up, napoleon-coat, napoleon-hat, sow, cockerel, simmonds, van, van-boxer, pigman
document.body.insertAdjacentHTML('afterbegin', `
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
<defs>
  <!-- OLD MAJOR: big boar, uncut tusks, wise half-closed eyes, heavy brows -->
  <symbol id="major" viewBox="0 0 100 100">
    <g fill="#fff" stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M24 32 L12 6 L40 22 Z"/><path d="M76 32 L88 6 L60 22 Z"/>
      <path d="M22 30 L16 14 L32 24" fill="none" stroke-width="2"/><path d="M78 30 L84 14 L68 24" fill="none" stroke-width="2"/>
      <ellipse cx="50" cy="54" rx="38" ry="33"/>
      <path d="M17 66 Q14 80 26 84" fill="none"/><path d="M83 66 Q86 80 74 84" fill="none"/>
      <path d="M42 30 Q50 26 58 30" fill="none" stroke-width="2"/><path d="M44 35 Q50 32 56 35" fill="none" stroke-width="2"/>
      <path d="M27 43 Q35 37 44 42" fill="none" stroke-width="5"/><path d="M73 43 Q65 37 56 42" fill="none" stroke-width="5"/>
      <path d="M30 50 Q36 46 43 50" fill="none"/><path d="M57 50 Q64 46 70 50" fill="none"/>
      <circle cx="36.5" cy="52" r="2.6" fill="#111"/><circle cx="63.5" cy="52" r="2.6" fill="#111"/>
      <ellipse cx="50" cy="70" rx="16" ry="12"/>
      <ellipse cx="44.5" cy="70" rx="2.6" ry="3.8" fill="#111"/><ellipse cx="55.5" cy="70" rx="2.6" ry="3.8" fill="#111"/>
      <path d="M36 77 Q24 74 25 58 Q30 68 39 71 Z"/><path d="M64 77 Q76 74 75 58 Q70 68 61 71 Z"/>
    </g>
  </symbol>

  <!-- PIG (young pigs / porkers) -->
  <symbol id="pig" viewBox="0 0 100 100">
    <g fill="#fff" stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M26 34 L18 12 L42 26 Z"/><path d="M74 34 L82 12 L58 26 Z"/>
      <ellipse cx="50" cy="56" rx="32" ry="28"/>
      <circle cx="38" cy="50" r="4" fill="#111"/><circle cx="62" cy="50" r="4" fill="#111"/>
      <circle cx="39.3" cy="48.6" r="1.3" fill="#fff" stroke="none"/><circle cx="63.3" cy="48.6" r="1.3" fill="#fff" stroke="none"/>
      <ellipse cx="50" cy="67" rx="13" ry="9"/>
      <ellipse cx="45.5" cy="67" rx="2.2" ry="3.2" fill="#111"/><ellipse cx="54.5" cy="67" rx="2.2" ry="3.2" fill="#111"/>
      <path d="M43 79 Q50 83 57 79" fill="none"/>
    </g>
  </symbol>

  <!-- BOXER: huge dark cart-horse, thick neck, WHITE STRIPE down nose, simple honest eye -->
  <symbol id="boxer" viewBox="0 0 100 100">
    <g stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M41 26 C28 40 18 62 12 98 L4 92 L11 84 L3 76 L11 68 L5 60 L13 52 L9 44 L18 38 L16 30 L28 27 Z" fill="#111"/>
      <path d="M35 31 L32 10 L45 25" fill="#666"/>
      <path d="M10 98 C12 70 24 46 40 30 L43 8 L54 25 C67 28 81 46 89 64 C94 75 90 85 79 86 C69 87 61 82 55 76 C50 84 50 91 51 98 Z" fill="#6e6e6e"/>
      <path d="M45 21 L50 34 L56 24 Z" fill="#111" stroke-width="2"/>
      <path d="M58 30 C70 40 79 52 85 65 L80 68 C73 55 65 43 55 34 Z" fill="#fff" stroke-width="1.5"/>
      <path d="M55 76 C51 63 57 53 66 55" fill="none" stroke-width="2.5"/>
      <circle cx="61" cy="44" r="5.5" fill="#fff"/><circle cx="61.5" cy="44.5" r="2.4" fill="#111"/>
      <path d="M54 37 L67 38" fill="none" stroke-width="3"/>
      <path d="M81 72 q3 -1 5 2" fill="none" stroke-width="2.5"/>
      <path d="M73 81 q6 2 12 0" fill="none" stroke-width="2.5"/>
    </g>
  </symbol>

  <!-- CLOVER: grey motherly mare, gentle closed eye with lashes, soft smile -->
  <symbol id="clover" viewBox="0 0 100 100">
    <g stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M41 27 C30 40 22 60 18 98 L12 94 C14 80 14 64 16 52 C18 42 26 32 32 28 Z" fill="#555"/>
      <path d="M36 32 L34 12 L45 26" fill="#bdbdbd"/>
      <path d="M20 98 C21 72 27 48 40 30 L43 9 L53 25 C66 28 80 46 88 64 C93 74 89 84 79 85 C69 86 61 81 55 75 C49 83 47 91 47 98 Z" fill="#c8c8c8"/>
      <path d="M44 22 Q48 30 54 26" fill="#555" stroke-width="2"/>
      <path d="M55 75 C52 62 58 52 66 54" fill="none" stroke-width="2.5"/>
      <path d="M55 44 Q61 49 67 44" fill="none"/>
      <path d="M56 45 l-3 2 M61 47.5 l0 3.5 M66 45 l3 2" fill="none" stroke-width="2"/>
      <path d="M82 70 q3 -1 4 2" fill="none" stroke-width="2.5"/>
      <path d="M72 79 q7 5 13 0" fill="none" stroke-width="2.5"/>
    </g>
  </symbol>

  <!-- MOLLIE: white mare, big sparkly eye with lashes, RED RIBBONS in mane, sugar lump -->
  <symbol id="mollie" viewBox="0 0 100 100">
    <g stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M41 27 C30 40 22 60 18 98 L10 94 C8 76 12 60 16 50 C18 42 26 32 32 28 Z" fill="#111"/>
      <path d="M36 32 L34 12 L45 26" fill="#fff"/>
      <path d="M20 98 C21 72 27 48 40 30 L43 9 L53 25 C66 28 80 46 88 64 C93 74 89 84 79 85 C69 86 61 81 55 75 C49 83 47 91 47 98 Z" fill="#fff"/>
      <path d="M44 20 C52 26 56 32 50 38 C50 30 47 26 44 20 Z" fill="#111" stroke-width="2"/>
      <path d="M55 75 C52 62 58 52 66 54" fill="none" stroke-width="2.5"/>
      <ellipse cx="61" cy="44" rx="5" ry="6.5" fill="#111"/>
      <circle cx="63" cy="41.5" r="2" fill="#fff" stroke="none"/><circle cx="59.5" cy="47" r="1" fill="#fff" stroke="none"/>
      <path d="M56 38 l-3 -4 M60 36.5 l-1 -5 M64 37 l1 -5" fill="none" stroke-width="2"/>
      <path d="M82 70 q3 -1 4 2" fill="none" stroke-width="2.5"/>
      <path d="M74 80 q6 3 11 0" fill="none" stroke-width="2.5"/>
      <rect x="84" y="77" width="8" height="8" fill="#fff" stroke-width="2" transform="rotate(12 88 81)"/>
      <g fill="#c62828" stroke-width="2">
        <path d="M24 46 l-9 -6 l0 12 Z"/><path d="M24 46 l9 -6 l0 12 Z"/><circle cx="24" cy="46" r="2.5"/>
        <path d="M18 70 l-8 -5 l0 10 Z"/><path d="M18 70 l8 -5 l0 10 Z"/><circle cx="18" cy="70" r="2.2"/>
      </g>
    </g>
  </symbol>

  <!-- BENJAMIN: grey donkey, LONG EARS, pale muzzle, flat bored eyelid, frown -->
  <symbol id="benjamin" viewBox="0 0 100 100">
    <g stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M36 32 L26 -4 L44 24" fill="#888"/>
      <path d="M20 98 C21 72 27 48 40 30 L44 -6 L56 25 C68 28 80 46 88 64 C93 74 89 84 79 85 C69 86 61 81 55 75 C49 83 47 91 47 98 Z" fill="#8f8f8f"/>
      <path d="M45 2 L48 22" fill="none" stroke-width="2"/>
      <path d="M40 31 L35 33 L37 38 L31 41 L33 46 L28 50" fill="none" stroke-width="3.5"/>
      <path d="M72 58 C85 60 93 73 88 82 C83 88 66 86 60 79 C61 69 65 61 72 58 Z" fill="#e2e2e2"/>
      <path d="M55 75 C52 62 58 52 66 54" fill="none" stroke-width="2.5"/>
      <circle cx="61" cy="45" r="4.5" fill="#fff"/><circle cx="61" cy="46.5" r="2.2" fill="#111"/>
      <path d="M54 42.5 L68 42.5" fill="none" stroke-width="4"/>
      <path d="M82 70 q3 -1 4 2" fill="none" stroke-width="2.5"/>
      <path d="M73 82 q6 -3 12 0" fill="none" stroke-width="2.5"/>
    </g>
  </symbol>

  <!-- MURIEL: white goat, curved horns, beard -->
  <symbol id="muriel" viewBox="0 0 100 100">
    <g stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M50 34 C44 16 30 10 20 18 C28 18 36 24 42 38" fill="#999"/>
      <path d="M24 98 C26 76 32 56 42 42 C46 34 54 30 62 32 C74 36 84 52 88 66 C90 74 86 80 78 80 C70 80 64 76 60 72 C56 82 52 90 50 98 Z" fill="#fff"/>
      <path d="M46 44 L26 48 L44 54 Z" fill="#fff"/>
      <path d="M70 79 L71 96 L80 80 Z" fill="#111"/>
      <circle cx="63" cy="47" r="4.5" fill="#fff"/><rect x="59.5" y="46" width="7" height="2.4" fill="#111" stroke="none"/>
      <path d="M82 70 q3 -1 4 2" fill="none" stroke-width="2.5"/>
    </g>
  </symbol>

  <!-- DOG (Bluebell, Jessie, Pincher) -->
  <symbol id="dog" viewBox="0 0 100 100">
    <g fill="#fff" stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <ellipse cx="50" cy="52" rx="28" ry="28"/>
      <path d="M26 32 C10 36 8 62 18 70 C26 60 28 46 34 36 Z" fill="#111"/>
      <path d="M74 32 C90 36 92 62 82 70 C74 60 72 46 66 36 Z" fill="#111"/>
      <path d="M38 40 Q42 30 48 36" fill="#111" stroke-width="2"/>
      <circle cx="40" cy="48" r="3.8" fill="#111"/><circle cx="60" cy="48" r="3.8" fill="#111"/>
      <circle cx="41.2" cy="46.8" r="1.2" fill="#fff" stroke="none"/><circle cx="61.2" cy="46.8" r="1.2" fill="#fff" stroke="none"/>
      <ellipse cx="50" cy="67" rx="14" ry="10"/>
      <ellipse cx="50" cy="61" rx="6" ry="4" fill="#111"/>
      <path d="M50 65 v4 M43 71 q7 4 14 0" fill="none"/>
    </g>
  </symbol>

  <!-- CAT: smug half-closed eyes, whiskers -->
  <symbol id="cat" viewBox="0 0 100 100">
    <g fill="#fff" stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M24 44 L26 10 L48 30 Z"/><path d="M76 44 L74 10 L52 30 Z"/>
      <path d="M29 36 L30 20 L40 30" fill="#111" stroke-width="1.5"/><path d="M71 36 L70 20 L60 30" fill="#111" stroke-width="1.5"/>
      <ellipse cx="50" cy="56" rx="31" ry="26"/>
      <path d="M45 33 v6 M50 32 v7 M55 33 v6" fill="none" stroke-width="2.5"/>
      <path d="M33 52 Q39 48 45 52" fill="none"/><path d="M55 52 Q61 48 67 52" fill="none"/>
      <path d="M34 53 Q39 56 44 53 Z M56 53 Q61 56 66 53 Z" fill="#111" stroke-width="1.5"/>
      <path d="M47 60 L53 60 L50 64 Z" fill="#111" stroke-width="2"/>
      <path d="M44 67 Q47 71 50 67 Q53 71 56 67" fill="none" stroke-width="2.5"/>
      <path d="M36 63 L14 59 M36 67 L14 70 M64 63 L86 59 M64 67 L86 70" fill="none" stroke-width="1.6"/>
    </g>
  </symbol>

  <!-- MOSES: black raven asleep on perch -->
  <symbol id="moses" viewBox="0 0 100 100">
    <g stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M8 86 H92" stroke-width="6"/>
      <path d="M38 76 L36 86 M50 77 L50 86" stroke-width="3"/>
      <path d="M22 60 L4 72 L24 70 Z" fill="#111"/>
      <ellipse cx="44" cy="60" rx="26" ry="18" fill="#111"/>
      <circle cx="66" cy="40" r="14" fill="#111"/>
      <path d="M78 36 L97 43 L78 49 Z" fill="#555"/>
      <path d="M62 39 q4 3 8 0" fill="none" stroke="#fff" stroke-width="2.5"/>
      <path d="M30 56 Q44 50 58 58" fill="none" stroke="#666" stroke-width="2"/>
    </g>
  </symbol>

  <!-- MR JONES: messy hair, red drunk nose, droopy eyes, stubble -->
  <symbol id="jones" viewBox="0 0 100 100">
    <g fill="#fff" stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M36 84 L32 99 M64 84 L68 99" fill="none"/>
      <ellipse cx="22" cy="56" rx="5" ry="8"/><ellipse cx="78" cy="56" rx="5" ry="8"/>
      <ellipse cx="50" cy="55" rx="27" ry="31"/>
      <path d="M22 50 C18 22 38 12 52 16 C66 12 84 24 78 50 C74 38 68 33 61 35 C56 28 46 30 42 35 C35 31 26 39 22 50 Z" fill="#111"/>
      <path d="M34 52 Q40 49 46 52 M54 52 Q60 49 66 52" fill="none"/>
      <circle cx="40" cy="55" r="2.6" fill="#111"/><circle cx="60" cy="55" r="2.6" fill="#111"/>
      <ellipse cx="50" cy="64" rx="6" ry="6.5" fill="#f0a9a5"/>
      <path d="M41 76 Q50 80 59 75" fill="none"/>
      <path d="M28 70 Q50 96 72 70" fill="none" stroke-width="2.5" stroke-dasharray="0.5 5"/>
    </g>
  </symbol>

  <!-- MR JONES (angry, woken up) -->
  <symbol id="jones-angry" viewBox="0 0 100 100">
    <g fill="#fff" stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M36 84 L32 99 M64 84 L68 99" fill="none"/>
      <ellipse cx="22" cy="56" rx="5" ry="8"/><ellipse cx="78" cy="56" rx="5" ry="8"/>
      <ellipse cx="50" cy="55" rx="27" ry="31"/>
      <path d="M22 50 C18 22 38 12 52 16 C66 12 84 24 78 50 C74 38 68 33 61 35 C56 28 46 30 42 35 C35 31 26 39 22 50 Z" fill="#111"/>
      <path d="M33 46 L46 51 M67 46 L54 51" fill="none" stroke-width="4.5"/>
      <circle cx="40" cy="55" r="3" fill="#111"/><circle cx="60" cy="55" r="3" fill="#111"/>
      <ellipse cx="50" cy="64" rx="6" ry="6.5" fill="#f0a9a5"/>
      <path d="M40 78 Q50 70 60 78 Q50 84 40 78 Z" fill="#111"/>
      <path d="M28 70 Q50 96 72 70" fill="none" stroke-width="2.5" stroke-dasharray="0.5 5"/>
      <path d="M80 26 l6 -6 M84 34 l8 -2 M74 20 l2 -8" fill="none" stroke-width="2.5"/>
    </g>
  </symbol>
  <!-- NAPOLEON: large fierce-looking BLACK Berkshire boar, white snout, narrow angry eyes, V brows -->
  <symbol id="napoleon" viewBox="0 0 100 100">
    <g stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M22 36 L16 6 L42 24 Z" fill="#3a3a3a"/><path d="M78 36 L84 6 L58 24 Z" fill="#3a3a3a"/>
      <ellipse cx="50" cy="55" rx="37" ry="32" fill="#4a4a4a"/>
      <path d="M50 24 L46 44 L54 44 Z" fill="#fff" stroke-width="2"/>
      <path d="M27 40 L45 49" stroke-width="6"/><path d="M73 40 L55 49" stroke-width="6"/>
      <path d="M30 51 Q37 47 44 53 Q37 55 30 51 Z" fill="#fff" stroke-width="2"/>
      <path d="M70 51 Q63 47 56 53 Q63 55 70 51 Z" fill="#fff" stroke-width="2"/>
      <circle cx="39" cy="52" r="2.2" fill="#111" stroke="none"/><circle cx="61" cy="52" r="2.2" fill="#111" stroke="none"/>
      <ellipse cx="50" cy="71" rx="15" ry="11" fill="#fff"/>
      <ellipse cx="45" cy="71" rx="2.4" ry="3.6" fill="#111"/><ellipse cx="55" cy="71" rx="2.4" ry="3.6" fill="#111"/>
      <path d="M41 83 L59 83" fill="none" stroke-width="3.5"/>
    </g>
  </symbol>

  <!-- SNOWBALL: lively white pig, tuft of hair, big bright eyes, eager open grin -->
  <symbol id="snowball" viewBox="0 0 100 100">
    <g fill="#fff" stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M26 34 L20 8 L44 24 Z"/><path d="M74 34 L80 8 L56 24 Z"/>
      <ellipse cx="50" cy="56" rx="33" ry="29"/>
      <path d="M42 28 Q44 14 52 18 Q50 10 60 14 Q54 20 56 28" fill="#fff"/>
      <path d="M31 41 Q38 36 45 41 M55 41 Q62 36 69 41" fill="none" stroke-width="3"/>
      <circle cx="38" cy="50" r="6" fill="#111"/><circle cx="62" cy="50" r="6" fill="#111"/>
      <circle cx="40" cy="47.5" r="2.2" fill="#fff" stroke="none"/><circle cx="64" cy="47.5" r="2.2" fill="#fff" stroke="none"/>
      <ellipse cx="50" cy="66" rx="12" ry="8.5"/>
      <ellipse cx="46" cy="66" rx="2" ry="3" fill="#111"/><ellipse cx="54" cy="66" rx="2" ry="3" fill="#111"/>
      <path d="M40 76 Q50 88 60 76 Z" fill="#111"/>
      <path d="M86 26 l4 -6 M90 36 l7 -2 M14 26 l-4 -6 M10 36 l-7 -2" fill="none" stroke-width="2.5"/>
    </g>
  </symbol>

  <!-- SQUEALER: small FAT pig, very round cheeks, twinkling eyes, talking mouth, wriggle lines -->
  <symbol id="squealer" viewBox="0 0 100 100">
    <g fill="#fff" stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M28 36 L24 16 L42 28 Z"/><path d="M72 36 L76 16 L58 28 Z"/>
      <ellipse cx="50" cy="60" rx="40" ry="30"/>
      <circle cx="22" cy="68" r="8" fill="#e9e9e9" stroke-width="2"/><circle cx="78" cy="68" r="8" fill="#e9e9e9" stroke-width="2"/>
      <path d="M33 52 Q38 46 43 52 M57 52 Q62 46 67 52" fill="none" stroke-width="3.5"/>
      <path d="M46 40 l2 -5 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 Z" fill="#111" stroke="none" transform="translate(-20 -4) scale(.7)"/>
      <path d="M46 40 l2 -5 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 Z" fill="#111" stroke="none" transform="translate(48 -4) scale(.7)"/>
      <ellipse cx="50" cy="65" rx="11" ry="8"/>
      <ellipse cx="46.5" cy="65" rx="1.8" ry="2.8" fill="#111"/><ellipse cx="53.5" cy="65" rx="1.8" ry="2.8" fill="#111"/>
      <ellipse cx="50" cy="80" rx="6" ry="4.5" fill="#111"/>
      <path d="M4 52 q-3 6 0 12 M96 52 q3 6 0 12" fill="none" stroke-width="2.5"/>
    </g>
  </symbol>

  <!-- MRS JONES: hair in a bun, worried brows -->
  <symbol id="mrsjones" viewBox="0 0 100 100">
    <g fill="#fff" stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <circle cx="50" cy="12" r="10" fill="#555"/>
      <path d="M36 86 L32 99 M64 86 L68 99" fill="none"/>
      <ellipse cx="50" cy="56" rx="25" ry="30"/>
      <path d="M25 52 C22 26 40 20 50 22 C60 20 78 26 75 52 C70 40 62 34 50 34 C38 34 30 40 25 52 Z" fill="#555"/>
      <path d="M35 47 Q40 44 45 48 M65 47 Q60 44 55 48" fill="none" stroke-width="2.5"/>
      <circle cx="40" cy="55" r="2.6" fill="#111"/><circle cx="60" cy="55" r="2.6" fill="#111"/>
      <path d="M50 58 L48 66 L52 66" fill="none" stroke-width="2"/>
      <ellipse cx="50" cy="75" rx="4" ry="3" fill="#111"/>
    </g>
  </symbol>

  <!-- MAN: Jones's farmhand, flat cap, stubble -->
  <symbol id="man" viewBox="0 0 100 100">
    <g fill="#fff" stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M36 84 L32 99 M64 84 L68 99" fill="none"/>
      <ellipse cx="22" cy="56" rx="5" ry="8"/><ellipse cx="78" cy="56" rx="5" ry="8"/>
      <ellipse cx="50" cy="56" rx="27" ry="30"/>
      <path d="M22 42 C24 22 76 22 78 42 Z" fill="#666"/><path d="M20 42 L86 42 L80 48 L22 46 Z" fill="#444"/>
      <path d="M34 52 L46 54 M66 52 L54 54" fill="none" stroke-width="3.5"/>
      <circle cx="40" cy="58" r="2.6" fill="#111"/><circle cx="60" cy="58" r="2.6" fill="#111"/>
      <path d="M50 60 L47 68 L52 68" fill="none" stroke-width="2"/>
      <path d="M42 76 L58 76" fill="none"/>
      <path d="M29 70 Q50 96 71 70" fill="none" stroke-width="2.5" stroke-dasharray="0.5 5"/>
    </g>
  </symbol>

  <!-- MR PILKINGTON (Foxwood): easy-going gentleman farmer, hunting cap, content smile, moustache -->
  <symbol id="pilkington" viewBox="0 0 100 100">
    <g fill="#fff" stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M36 86 L32 99 M64 86 L68 99" fill="none"/>
      <ellipse cx="22" cy="58" rx="5" ry="8"/><ellipse cx="78" cy="58" rx="5" ry="8"/>
      <ellipse cx="50" cy="58" rx="27" ry="29"/>
      <path d="M24 46 L10 52 L26 50 Z M76 46 L90 52 L74 50 Z" fill="#9a9a9a"/>
      <path d="M24 46 C24 18 76 18 76 46 Z" fill="#9a9a9a"/>
      <path d="M32 30 L68 30 M28 38 L72 38 M50 20 L50 46" fill="none" stroke-width="1.5"/>
      <path d="M34 57 Q40 53 46 57 M54 57 Q60 53 66 57" fill="none"/>
      <path d="M38 72 Q44 67 50 71 Q56 67 62 72" fill="none" stroke-width="4"/>
      <path d="M42 78 Q50 84 58 78" fill="none"/>
    </g>
  </symbol>

  <!-- MR FREDERICK (Pinchfield): tough, shrewd; square jaw, bowler hat, narrow eyes, frown -->
  <symbol id="frederick" viewBox="0 0 100 100">
    <g fill="#fff" stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M36 88 L32 99 M64 88 L68 99" fill="none"/>
      <ellipse cx="23" cy="60" rx="5" ry="8"/><ellipse cx="77" cy="60" rx="5" ry="8"/>
      <path d="M26 42 L74 42 L74 72 Q72 88 50 90 Q28 88 26 72 Z"/>
      <path d="M30 42 C30 14 70 14 70 42 Z" fill="#111"/>
      <path d="M16 43 Q50 35 84 43 Q50 49 16 43 Z" fill="#111"/>
      <path d="M32 52 L46 56 M68 52 L54 56" fill="none" stroke-width="4.5"/>
      <path d="M35 61 L45 61 M55 61 L65 61" fill="none" stroke-width="3.5"/>
      <path d="M50 62 L47 71 L52 71" fill="none" stroke-width="2"/>
      <path d="M40 76 L60 76" fill="none" stroke-width="3"/>
      <path d="M42 82 Q50 79 58 82" fill="none"/>
    </g>
  </symbol>

  <!-- MR WHYMPER: sly little solicitor with side whiskers, sideways glance, smirk -->
  <symbol id="whymper" viewBox="0 0 100 100">
    <g fill="#fff" stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M38 86 L36 99 M62 86 L64 99" fill="none"/>
      <path d="M44 86 L50 94 L56 86" fill="#111" stroke-width="2"/>
      <ellipse cx="27" cy="58" rx="4" ry="7"/><ellipse cx="73" cy="58" rx="4" ry="7"/>
      <ellipse cx="50" cy="56" rx="23" ry="31"/>
      <path d="M27 46 C27 20 73 20 73 46 C66 32 50 30 27 46 Z" fill="#333"/>
      <path d="M44 25 L40 38" fill="none" stroke="#fff" stroke-width="1.5"/>
      <path d="M28 50 L27 74 L36 68 L33 52 Z M72 50 L73 74 L64 68 L67 52 Z" fill="#333"/>
      <path d="M36 54 L46 54 M54 54 L64 54" fill="none" stroke-width="3.5"/>
      <circle cx="44" cy="57" r="2.2" fill="#111"/><circle cx="62" cy="57" r="2.2" fill="#111"/>
      <path d="M50 58 L56 67 L50 68" fill="none" stroke-width="2"/>
      <path d="M42 76 Q52 80 60 71" fill="none"/>
    </g>
  </symbol>

  <!-- MINIMUS: pig poet, dreamy closed eyes, quill pen behind ear -->
  <symbol id="minimus" viewBox="0 0 100 100">
    <g fill="#fff" stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M74 36 C84 14 96 4 94 20 C90 28 82 34 76 38 Z"/>
      <path d="M76 37 L93 10" fill="none" stroke-width="1.5"/>
      <path d="M26 34 L18 12 L42 26 Z"/><path d="M74 34 L82 12 L58 26 Z"/>
      <ellipse cx="50" cy="56" rx="32" ry="28"/>
      <path d="M32 50 Q38 55 44 50 M56 50 Q62 55 68 50" fill="none"/>
      <ellipse cx="50" cy="67" rx="13" ry="9"/>
      <ellipse cx="45.5" cy="67" rx="2.2" ry="3.2" fill="#111"/><ellipse cx="54.5" cy="67" rx="2.2" ry="3.2" fill="#111"/>
      <path d="M44 79 Q50 82 56 79" fill="none"/>
      <path d="M6 30 l4 -6 M2 40 l7 -2" fill="none" stroke-width="2"/>
    </g>
  </symbol>

  <!-- NAPOLEON'S DOGS: dark, pointed ears, angry brows, bared teeth, brass-studded collar -->
  <symbol id="wardog" viewBox="0 0 100 100">
    <g stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M28 38 L20 4 L44 26 Z" fill="#333"/><path d="M72 38 L80 4 L56 26 Z" fill="#333"/>
      <ellipse cx="50" cy="50" rx="29" ry="28" fill="#555"/>
      <path d="M33 40 L47 47 M67 40 L53 47" fill="none" stroke-width="5"/>
      <path d="M34 50 Q40 46 46 52 Q40 54 34 50 Z M66 50 Q60 46 54 52 Q60 54 66 50 Z" fill="#fff" stroke-width="2"/>
      <circle cx="41" cy="51" r="1.8" fill="#111" stroke="none"/><circle cx="59" cy="51" r="1.8" fill="#111" stroke="none"/>
      <ellipse cx="50" cy="67" rx="16" ry="11" fill="#8a8a8a"/>
      <ellipse cx="50" cy="60" rx="6" ry="4" fill="#111"/>
      <path d="M38 70 Q50 64 62 70 L59 77 Q50 73 41 77 Z" fill="#fff"/>
      <path d="M44 69 l1 5 M50 67 v6 M56 69 l-1 5" fill="none" stroke-width="1.5"/>
      <path d="M24 80 Q50 94 76 80 L76 88 Q50 102 24 88 Z" fill="#111"/>
      <g fill="#fff" stroke="none"><circle cx="31" cy="86" r="2.3"/><circle cx="40" cy="90.5" r="2.3"/><circle cx="50" cy="92.5" r="2.3"/><circle cx="60" cy="90.5" r="2.3"/><circle cx="69" cy="86" r="2.3"/></g>
    </g>
  </symbol>

  <!-- PIG walking on hind legs -->
  <symbol id="pig-up" viewBox="0 0 100 100">
    <g stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M41 84 L39 97 L47 97 M59 84 L61 97 L53 97" fill="none"/>
      <path d="M32 58 Q20 64 23 74 M68 58 Q79 60 80 50" fill="none" stroke-width="5"/>
      <ellipse cx="50" cy="66" rx="20" ry="23" fill="#fff"/>
      
      <path d="M36 18 L32 3 L46 12 Z M64 18 L68 3 L54 12 Z" fill="#fff"/>
      <ellipse cx="50" cy="27" rx="22" ry="19" fill="#fff"/>
      <circle cx="42" cy="24" r="2.2" fill="#111" stroke="none"/><circle cx="58" cy="24" r="2.2" fill="#111" stroke="none"/>
      <ellipse cx="50" cy="34" rx="9" ry="6.5" fill="#fff"/>
      <circle cx="47" cy="34" r="1.6" fill="#111" stroke="none"/><circle cx="53" cy="34" r="1.6" fill="#111" stroke="none"/>
      
    </g>
  </symbol>

  <!-- SQUEALER on hind legs, very fat -->
  <symbol id="squealer-up" viewBox="0 0 100 100">
    <g stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M41 84 L39 97 L47 97 M59 84 L61 97 L53 97" fill="none"/>
      <path d="M23 58 Q11 64 14 74 M77 58 Q88 60 89 50" fill="none" stroke-width="5"/>
      <ellipse cx="50" cy="66" rx="29" ry="23" fill="#fff"/>
      
      <path d="M36 18 L32 3 L46 12 Z M64 18 L68 3 L54 12 Z" fill="#fff"/>
      <ellipse cx="50" cy="27" rx="22" ry="19" fill="#fff"/>
      <circle cx="42" cy="24" r="2.2" fill="#111" stroke="none"/><circle cx="58" cy="24" r="2.2" fill="#111" stroke="none"/><path d="M45 42 Q50 46 55 42" fill="none" stroke-width="2"/>
      <ellipse cx="50" cy="34" rx="9" ry="6.5" fill="#fff"/>
      <circle cx="47" cy="34" r="1.6" fill="#111" stroke="none"/><circle cx="53" cy="34" r="1.6" fill="#111" stroke="none"/>
      
    </g>
  </symbol>

  <!-- NAPOLEON upright with a whip -->
  <symbol id="napoleon-up" viewBox="0 0 100 100">
    <g stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M41 84 L39 97 L47 97 M59 84 L61 97 L53 97" fill="none"/>
      <path d="M29 58 Q17 64 20 74 M71 58 Q82 60 83 50" fill="none" stroke-width="5"/>
      <ellipse cx="50" cy="66" rx="23" ry="23" fill="#4a4a4a"/>
      
      <path d="M36 18 L32 3 L46 12 Z M64 18 L68 3 L54 12 Z" fill="#4a4a4a"/>
      <ellipse cx="50" cy="27" rx="22" ry="19" fill="#4a4a4a"/>
      <circle cx="42" cy="26" r="2.6" fill="#fff" stroke-width="1.5"/><circle cx="58" cy="26" r="2.6" fill="#fff" stroke-width="1.5"/><path d="M34 18 L46 23 M66 18 L54 23" stroke-width="4"/>
      <ellipse cx="50" cy="34" rx="9" ry="6.5" fill="#fff"/>
      <circle cx="47" cy="34" r="1.6" fill="#111" stroke="none"/><circle cx="53" cy="34" r="1.6" fill="#111" stroke="none"/>
      <path d="M82 54 L89 34" stroke-width="4"/><path d="M89 34 Q99 14 88 12 Q78 12 82 3" fill="none" stroke-width="2"/>
    </g>
  </symbol>

  <!-- NAPOLEON in black coat with a pipe -->
  <symbol id="napoleon-coat" viewBox="0 0 100 100">
    <g stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M41 84 L39 97 L47 97 M59 84 L61 97 L53 97" fill="none"/>
      <path d="M29 58 Q17 64 20 74 M71 58 Q82 60 83 50" fill="none" stroke-width="5"/>
      <ellipse cx="50" cy="66" rx="23" ry="23" fill="#4a4a4a"/>
      <path d="M30 54 Q50 44 70 54 L76 86 L55 86 L50 66 L45 86 L24 86 Z" fill="#111"/><path d="M42 48 L50 66 L58 48 Z" fill="#fff" stroke-width="2"/><path d="M39 86 L38 97 L47 97 L47 86 Z M61 86 L62 97 L53 97 L53 86 Z" fill="#777" stroke-width="2"/>
      <path d="M36 18 L32 3 L46 12 Z M64 18 L68 3 L54 12 Z" fill="#4a4a4a"/>
      <ellipse cx="50" cy="27" rx="22" ry="19" fill="#4a4a4a"/>
      <circle cx="42" cy="26" r="2.6" fill="#fff" stroke-width="1.5"/><circle cx="58" cy="26" r="2.6" fill="#fff" stroke-width="1.5"/><path d="M34 18 L46 23 M66 18 L54 23" stroke-width="4"/>
      <ellipse cx="50" cy="34" rx="9" ry="6.5" fill="#fff"/>
      <circle cx="47" cy="34" r="1.6" fill="#111" stroke="none"/><circle cx="53" cy="34" r="1.6" fill="#111" stroke="none"/>
      <path d="M56 40 L70 44 L70 37 L78 37 L78 47 L69 49 Z" fill="#777" stroke-width="2"/><path d="M74 32 q-4 -5 0 -9 q4 -4 0 -9" fill="none" stroke="#888" stroke-width="2"/>
    </g>
  </symbol>

  <!-- NAPOLEON'S FAVOURITE SOW in Mrs Jones's silk dress -->
  <symbol id="sow" viewBox="0 0 100 100">
    <g stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M41 84 L39 97 L47 97 M59 84 L61 97 L53 97" fill="none"/>
      <path d="M32 58 Q20 64 23 74 M68 58 Q79 60 80 50" fill="none" stroke-width="5"/>
      <ellipse cx="50" cy="66" rx="20" ry="23" fill="#fff"/>
      <path d="M36 50 Q50 44 64 50 L80 93 L20 93 Z" fill="#e6e6e6"/><path d="M28 76 q5 5 11 0 q5 5 11 0 q5 5 11 0 q5 5 11 0" fill="none" stroke-width="1.8"/>
      <path d="M36 18 L32 3 L46 12 Z M64 18 L68 3 L54 12 Z" fill="#fff"/>
      <ellipse cx="50" cy="27" rx="22" ry="19" fill="#fff"/>
      <circle cx="42" cy="24" r="2.2" fill="#111" stroke="none"/><circle cx="58" cy="24" r="2.2" fill="#111" stroke="none"/>
      <ellipse cx="50" cy="34" rx="9" ry="6.5" fill="#fff"/>
      <circle cx="47" cy="34" r="1.6" fill="#111" stroke="none"/><circle cx="53" cy="34" r="1.6" fill="#111" stroke="none"/>
      
    </g>
  </symbol>

  <!-- NAPOLEON in an old bowler hat -->
  <symbol id="napoleon-hat" viewBox="0 0 100 100">
    <g stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M22 36 L16 6 L42 24 Z" fill="#3a3a3a"/><path d="M78 36 L84 6 L58 24 Z" fill="#3a3a3a"/>
      <ellipse cx="50" cy="55" rx="37" ry="32" fill="#4a4a4a"/>
      <path d="M50 24 L46 44 L54 44 Z" fill="#fff" stroke-width="2"/>
      <path d="M27 40 L45 49" stroke-width="6"/><path d="M73 40 L55 49" stroke-width="6"/>
      <path d="M30 51 Q37 47 44 53 Q37 55 30 51 Z" fill="#fff" stroke-width="2"/>
      <path d="M70 51 Q63 47 56 53 Q63 55 70 51 Z" fill="#fff" stroke-width="2"/>
      <circle cx="39" cy="52" r="2.2" fill="#111" stroke="none"/><circle cx="61" cy="52" r="2.2" fill="#111" stroke="none"/>
      <ellipse cx="50" cy="71" rx="15" ry="11" fill="#fff"/>
      <ellipse cx="45" cy="71" rx="2.4" ry="3.6" fill="#111"/><ellipse cx="55" cy="71" rx="2.4" ry="3.6" fill="#111"/>
      <path d="M41 83 L59 83" fill="none" stroke-width="3.5"/>
    </g><g stroke="#111" stroke-width="3" stroke-linejoin="round"><path d="M30 27 C30 -2 70 -2 70 27 Z" fill="#222"/><path d="M20 26 Q50 38 80 26 Q78 20 70 23 L30 23 Q22 20 20 26 Z" fill="#111"/><path d="M31 19 L69 19" stroke="#fff" stroke-width="2"/></g>
  </symbol>

  <!-- Napoleon's black COCKEREL -->
  <symbol id="cockerel" viewBox="0 0 100 100">
    <g stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M44 84 L42 97 M56 84 L58 97 M36 97 L48 97 M52 97 L64 97" fill="none"/>
      <path d="M66 66 Q99 62 93 24 Q84 34 82 26 Q76 40 62 48 Z" fill="#222"/>
      <ellipse cx="50" cy="66" rx="27" ry="21" fill="#222"/>
      <path d="M24 64 Q20 38 30 28 Q48 24 54 48 Z" fill="#222"/>
      <path d="M26 18 q1 -13 7 -7 q3 -9 8 -1 q8 -4 6 10 Z" fill="#999"/>
      <circle cx="35" cy="28" r="13" fill="#222"/>
      <path d="M23 25 L6 22 L19 30 L9 37 L24 34 Z" fill="#fff"/>
      <path d="M28 38 q-4 10 3 11 q6 -2 3 -11 Z" fill="#999"/>
      <circle cx="32" cy="26" r="3.2" fill="#fff" stroke-width="1.5"/>
      <path d="M48 62 Q62 60 68 72 Q54 80 46 70 Z" fill="#555" stroke="#fff" stroke-width="1.5"/></g>
  </symbol>

  <!-- VAN DRIVER: sly, low-crowned bowler hat -->
  <symbol id="simmonds" viewBox="0 0 100 100">
    <g stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M38 86 L34 99 M62 86 L66 99" fill="none"/>
      <ellipse cx="50" cy="58" rx="24" ry="29" fill="#fff"/>
      <path d="M27 38 C28 18 72 18 73 38 Z" fill="#222"/><path d="M15 39 Q50 30 85 39 Q84 46 76 44 L24 44 Q16 46 15 39 Z" fill="#111"/>
      <path d="M34 51 L46 55 M66 51 L54 55" stroke-width="3"/>
      <circle cx="43" cy="60" r="2.4" fill="#111" stroke="none"/><circle cx="62" cy="60" r="2.4" fill="#111" stroke="none"/>
      <path d="M50 59 L46 69 L52 69" fill="none" stroke-width="2"/><path d="M40 76 Q52 81 63 70" fill="none"/></g>
  </symbol>

  <!-- THE CLOSED VAN, window dark -->
  <symbol id="van" viewBox="0 0 100 100">
    <g stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <rect x="6" y="12" width="88" height="62" rx="3" fill="#333"/>
      <rect x="10" y="16" width="80" height="54" fill="#444" stroke-width="1.5"/>
      <rect x="28" y="20" width="44" height="46" fill="#111"/></g>
      
    <g stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <circle cx="22" cy="82" r="13" fill="#fff"/><circle cx="78" cy="82" r="13" fill="#fff"/>
      <path d="M22 69 V95 M9 82 H35 M78 69 V95 M65 82 H91" stroke-width="2"/></g>
  </symbol>

  <!-- THE VAN with Boxer at the window -->
  <symbol id="van-boxer" viewBox="0 0 100 100">
    <g stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <rect x="6" y="12" width="88" height="62" rx="3" fill="#333"/>
      <rect x="10" y="16" width="80" height="54" fill="#444" stroke-width="1.5"/>
      <rect x="28" y="20" width="44" height="46" fill="#f2f2f2"/></g>
      <use href="#boxer" x="29" y="21" width="42" height="44"/>
    <g stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <circle cx="22" cy="82" r="13" fill="#fff"/><circle cx="78" cy="82" r="13" fill="#fff"/>
      <path d="M22 69 V95 M9 82 H35 M78 69 V95 M65 82 H91" stroke-width="2"/></g>
  </symbol>

  <!-- Half pig, half man -->
  <symbol id="pigman" viewBox="0 0 100 100">
    <g stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M22 50 q-9 2 -5 12 q3 5 8 3" fill="#fff"/><path d="M66 30 L84 4 L87 42 Z" fill="#b9b9b9"/>
      <path d="M50 24 C30 20 22 38 22 56 C22 78 36 90 50 90 Z" fill="#fff"/><path d="M50 24 C72 22 88 36 88 56 C88 76 70 90 50 90 Z" fill="#b9b9b9"/>
      <path d="M23 46 C22 14 42 12 50 16 L50 33 Q34 31 23 46 Z" fill="#333"/>
      <path d="M30 48 L44 52" stroke-width="4"/><path d="M76 46 L58 52" stroke-width="5"/>
      <circle cx="38" cy="57" r="2.8" fill="#111"/><circle cx="66" cy="57" r="2.8" fill="#111"/>
      <path d="M50 55 L41 70 L50 71" fill="#fff" stroke-width="2"/><path d="M50 61 Q70 60 70 70 Q70 79 50 79 Z" fill="#fff"/><ellipse cx="59" cy="70" rx="2.4" ry="3.8" fill="#111"/>
      <path d="M36 80 Q50 88 66 84" fill="none"/><path d="M50 18 V90" stroke-width="1.5" stroke-dasharray="4 4"/></g>
  </symbol>
</defs>
</svg>
`);
