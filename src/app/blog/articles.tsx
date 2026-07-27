export type Block =
  | { t: "p"; v: string }
  | { t: "h2"; v: string }
  | { t: "img"; bg?: string; src?: string; alt?: string };

export type Article = {
  cat: string;
  title: string;
  date: string;
  hero: { kind: "build" | "img"; src?: string; alt?: string };
  blocks: Block[];
};

const buildHero = { kind: "build" as const };

export const articles: Record<string, Article> = {
  intro: {
    cat: "Building Craveit",
    title: "Introducing Craveit: what we built and why",
    date: "1st August, 2026",
    hero: buildHero,
    blocks: [
      { t: "p", v: "It started, like most good ideas, with a bad dinner. One of us was sitting in a flat in Independence Layout, thumb scrolling through a delivery app, hungry and increasingly annoyed. Every restaurant looked the same. The same grey menu lists. The same recycled photos. No way to tell whether the jollof would arrive smoky and rich or dry and disappointing. We ordered anyway, out of hunger more than hope, and the food was exactly as uncertain as the app had made it feel." },
      { t: "p", v: "That small frustration turned into a bigger question. Enugu is a city that eats well. Suya smoke on the evening air, mama puts full at lunch, home kitchens turning out Ofe Onugbu that could stop you mid sentence. So why did ordering that food feel like reading a spreadsheet? The city was full of life, and the apps had drained all of it out." },
      { t: "p", v: "Craveit is our answer. It is a food app built on one stubborn belief: you should be able to see your food, really see it, before you ever place an order." },
      { t: "img", bg: "#F2A07A" },
      { t: "h2", v: "What we actually built" },
      { t: "p", v: "Open Craveit and the first thing you meet is not a search bar. It is food, moving. Short videos from real kitchens near you: the ladle lifting, the steam curling, the plate coming together. You scroll the way you already scroll everything else, except here the reward for scrolling is dinner. When something makes you crave it, you tap, and it is on its way." },
      { t: "p", v: "Behind that feed we built the unglamorous parts too: a vendor app that lets a home cook or a busy restaurant film, list, and start selling in minutes, and a delivery layer that gets the order across Enugu while it is still hot. No setup cost for vendors. No stock photos anywhere. Every clip is the real food from the real kitchen you are ordering from." },
      { t: "h2", v: "Why it matters" },
      { t: "p", v: "For the person who is hungry, it means fewer bad guesses and more of the meals you actually wanted. For the vendor, it means a small kitchen can compete on the strength of its cooking rather than the size of its marketing budget. A pot of Ofe Onugbu that tastes like someone's grandmother made it finally gets to look like it too." },
      { t: "p", v: "This is only the beginning, and we are building it in the open, in Enugu, with the vendors and eaters who make this city taste the way it does. Craveit is our attempt to put the life back into the screen. We think the food deserves it. We hope, once you have scrolled and tapped and eaten, you will agree." },
    ],
  },
  dishes: {
    cat: "Food culture",
    title: "The dishes that define Enugu, one video at a time",
    date: "1st August, 2026",
    hero: { kind: "img", src: "/images/cat-food-featured.svg", alt: "Bowl of Nigerian food" },
    blocks: [
      { t: "p", v: "Ask anyone who grew up in Enugu what home tastes like and they will not describe it in words. They will go quiet for a second, then start naming dishes. A particular soup their mother made on Sundays. The suya spot they knew by the smoke before they knew it by name. Food here is memory you can eat, and every plate carries a little of the city with it." },
      { t: "p", v: "The trouble is that a menu cannot hold any of that. A line of text and a price tell you nothing about the thick green pull of a good Ofe Onugbu or the crackle of freshly fried Abacha garnish. So on Craveit, the vendors do not describe their food. They show it. Here are a few of the dishes that keep showing up on the feed, and why they belong there." },
      { t: "h2", v: "Ofe Onugbu, the soup that started it all" },
      { t: "p", v: "Bitterleaf soup is the quiet king of the Igbo table, and no two kitchens make it quite the same. Washed until the bitterness softens, thickened with cocoyam, deep with palm oil and stockfish, it is the dish grandmothers are judged by. On video you see the moment the spoon lifts and the soup falls back in slow, heavy ribbons. That single second tells you more than any menu ever could." },
      { t: "img", bg: "#1B4D3E" },
      { t: "h2", v: "Abacha, the African salad with a crunch" },
      { t: "p", v: "Shredded cassava tossed with palm oil sauce, garden egg leaves, ponmo, and a scatter of fried fish and pepper, Abacha is the dish that turns an afternoon into an occasion. It is texture you can hear. When a vendor tumbles it together on camera and the colours come alive, orange oil, dark greens, flecks of red pepper, it does the selling all by itself." },
      { t: "h2", v: "Suya, once the sun goes down" },
      { t: "p", v: "Every neighbourhood has its mai suya, and every mai suya has regulars who will argue theirs is the best in Enugu. Thin beef threaded on sticks, dusted with yaji, turned over glowing coals until the edges char, then wrapped with raw onion and more pepper. On the feed you catch the smoke curling off the grill at night, and suddenly you know exactly what you want for dinner." },
      { t: "p", v: "These are only a handful. Jollof with the smoky bottom of the pot, puff-puff sold warm by the roadside, pepper soup that clears your head on a rainy day, the list is as long as the city is hungry. What they all share is that they were never meant to sit still in a photo. They move, they steam, they crackle. Craveit just gives them somewhere to do it, one video at a time." },
    ],
  },
  "feed-design": {
    cat: "Building Craveit",
    title: "Designing a feed that makes you hungry, responsibly",
    date: "1st August, 2026",
    hero: buildHero,
    blocks: [
      { t: "p", v: "A feed of food videos is an easy thing to describe and a dangerous thing to build. We knew from the first sketch what we wanted Craveit to feel like: open it, scroll a little, see something that makes your stomach answer before your brain does, and order it. The danger is that the exact same mechanics that help you decide can, tuned slightly differently, keep you scrolling for an hour and feed you nothing at all." },
      { t: "p", v: "We have all felt the difference. There are feeds that leave you satisfied and feeds that leave you hollow, thumb aching, unsure where the last forty minutes went. We did not want to build the second kind. So before we wrote a line of the feed, we wrote down a rule for ourselves: the app is a success when you close it, not when you stay." },
      { t: "img", bg: "#131927" },
      { t: "h2", v: "A feed that helps you decide, then lets you go" },
      { t: "p", v: "The whole feed is built to shorten the distance between craving and dinner, not stretch it. Videos are short and get to the food fast. What is near you and open now floats up first, because a beautiful clip of a kitchen that closed an hour ago only wastes your time. And when you tap to order, the feed steps out of the way completely. No detour, no one last thing to watch on the way to checkout." },
      { t: "h2", v: "The things we chose not to build" },
      { t: "p", v: "Responsible design is mostly a list of tempting things you say no to. We do not chase watch time as a number to grow. We do not bury the order button to squeeze in more scrolling. We do not fill quiet moments with notifications engineered to pull you back when you were perfectly happy not being pulled. The measure that matters to us is simple: did you find a meal you were glad you ordered?" },
      { t: "p", v: "There is a version of this app that is stickier, louder, and worse. We can feel it pulling from time to time, and we expect we always will. Building the feed responsibly is not a box we ticked once at launch. It is a choice we make again with every decision, trusting that an app which respects your time is the one you will actually want to open tomorrow." },
    ],
  },
  "late-night": {
    cat: "Food culture",
    title: "Street food after dark: Enugu's late night favourites",
    date: "1st August, 2026",
    hero: { kind: "img", src: "/images/cat-food-featured.svg", alt: "Nigerian street food" },
    blocks: [
      { t: "p", v: "Enugu changes after dark. The heat of the day lifts, the traffic thins, and along Ogui Road and Zik Avenue a different city switches on, one lit by coal fires and the blue flicker of a generator powering a single bulb over a grill. This is when some of the best food in the city gets made, for the people awake to want it." },
      { t: "p", v: "Late night food has its own crowd. The friends stretching out the last hour of a night. The worker coming off a long shift. The person who simply could not sleep and followed the smell outside. They are not looking at menus. They follow smoke, sound, and the small queue that tells you a spot is worth the wait. Here is what they are lining up for." },
      { t: "h2", v: "Suya, the sound of midnight" },
      { t: "p", v: "Nothing says late night in Enugu like the mai suya fanning his coals. Beef and ram threaded thin, rolled in yaji, turned until the fat catches and hisses. He wraps it in old newspaper with raw onion and extra pepper, and hands it over still too hot to hold. On a video you hear the sizzle before you see the meat, and that sound alone is enough to make you get up." },
      { t: "img", bg: "#2A2018" },
      { t: "h2", v: "Pepper soup, for whatever the night threw at you" },
      { t: "p", v: "Goat meat or catfish, dark with scent leaf and uziza, hot enough to clear your head, pepper soup is the late night cure for everything. It arrives steaming in a bowl you cup with both hands. There is a reason it shows up after a long night out and after a hard day both. On camera the steam does the talking, curling up off the bowl in a way no photo has ever managed." },
      { t: "h2", v: "Roasted plantain and fish, low and slow" },
      { t: "p", v: "Boli, roasted plantain, blackening gently at the edges beside a fish rubbed with pepper, sold with a scoop of groundnut. It is cheap, filling, and honest, the food you eat standing up on the walk home. The vendor turns each piece with bare fingers and long practice, and the char tells you when it is ready." },
      { t: "p", v: "These spots have always run on word of mouth and the pull of smoke on the breeze. Craveit does not want to replace that magic, only to carry a little of it to the person too far to smell the grill. Point the camera at the coals, let the night do the rest, and the queue that used to end at the roadside can reach a whole city that is still awake and still hungry." },
    ],
  },
  "weekend-cook": {
    cat: "Vendor stories",
    title: "From weekend cook to full time vendor",
    date: "1st August, 2026",
    hero: { kind: "img", src: "/images/cat-vendor.svg", alt: "Vendor food stall" },
    blocks: [
      { t: "p", v: "Chidi never planned to sell food. For years he cooked only on Saturdays, a pot of jollof and peppered chicken big enough for whoever showed up at his flat in Uwani. Friends brought friends. Somebody always asked, half joking, why he did not do this for a living. He always laughed it off. A day job was a day job, and a pot of rice was just a pot of rice." },
      { t: "p", v: "The joke stopped being a joke the weekend three strangers turned up. A friend of a friend had filmed the pot the week before, the lid coming off, the steam, the crust at the bottom, and passed the clip around. People he had never met had watched his food cook and decided they wanted in. That was the moment Chidi understood something the menus had been hiding: it was never really the recipe holding him back. It was that nobody could see it." },
      { t: "img", bg: "#B9762F" },
      { t: "h2", v: "Starting small, on a Saturday" },
      { t: "p", v: "He signed up on Craveit the way he did everything, cautiously. One dish. Weekends only. He filmed the Saturday pot on his phone, propped against a bag of rice, and listed it. There was no shopfront to rent, no signboard to paint, no risk he could not walk back from. If nobody ordered, he had still cooked for his friends. But people did order. Then they ordered again, and left reviews that read like they were describing a place they missed." },
      { t: "h2", v: "The week it became real" },
      { t: "p", v: "Weekends filled up, so he added Wednesdays. Then a second dish, then a third. The steady trickle of reviews did the work a marketing budget would have, one honest sentence at a time. When the weekday orders started matching what his job paid, the decision he had been circling for months finally made itself. He handed in his notice, cleared a proper kitchen space, and started cooking for a living." },
      { t: "p", v: "Chidi still cooks the Saturday jollof, only now it is one of many pots and there is a rider waiting for it. He is not a rare story, and that is the part we are proudest of. There are Chidis all over Enugu with a dish worth paying for and no way to be seen. The kitchen was always good enough. Craveit just handed him a camera and got out of the way." },
    ],
  },
};

export const buildThumbSvg = (
  <svg width="200" height="200" viewBox="0 0 120 120" fill="none"><rect x="42" y="22" width="46" height="82" rx="10" fill="#131927" /><rect x="47" y="28" width="36" height="64" rx="5" fill="#1E7A44" /><circle cx="65" cy="60" r="12" fill="#ffffff" /><path d="M61 54 L73 60 L61 66 Z" fill="#E96029" /><circle cx="32" cy="86" r="12" fill="#E96029" /><circle cx="32" cy="86" r="4.5" fill="#F5ECDD" /><rect x="18" y="34" width="14" height="14" rx="3" fill="#F2C230" /><rect x="90" y="46" width="14" height="14" rx="3" fill="#4E9E4F" /></svg>
);
