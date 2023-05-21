let bootom = document.getElementById('Bottom');
var div = document.getElementById("container");
var time = new Date();
const user = ["sender", "receiver"];
const  profiles = ["man","woman"];
const  speeches = [
    "Hey there! How's your day going?",
    "Hi! It's been pretty good ❇️  so far. Just finished a productive morning 🌞  at work. 🏗️🏢  How about you?",  
    "That's great 🇬🇧🇬🇧🇬🇧  to hear! 👂🙉  My 😊  day has been busy too. I've been running 🏃‍♀️  around with meetings and deadlines. ⏱️  But 😥  now that it's finally lunchtime, I 😀  can relax 🍻  a bit. 🫦  Do you 🤟  have 🈶  any plans for 🔰  the 🤘  rest 😪  of the 🤣🤘  day?",
    "Well, after 🇦🇫  work, 🏢  I'm thinking 🗯️  of hitting 👊  the 🫵  gym. I've been trying to stay consistent with my 😊  workouts. It's a great 🇬🇧  stress reliever 😮‍💨  for 🈺  me. How about you? 😀  Any exciting plans?",
    "Oh, that sounds 📢  like 💙  a healthy 🥗  and refreshing 🚻  plan. As for 🈺  me, I 😀  might catch up on some reading 📗  later. 🕙  I've been trying to get 🉐  through this new 🌑🇳🇨🎍  novel I 😊  bought. It's quite engaging. Reading 📘  helps 🆘  me unwind and escape into different worlds. 🌏🗺️  Are 👉  you 😀  a bookworm too?",
    "Definitely! I 😊  love 👨‍👩‍👦  getting 💆💇‍♂️  lost 🏳️  in a good 🦸‍♀️  book. 📚  What 😦😦😦  genre are 👉  you 🤟  into? I 😊  enjoy a mix of fiction and non-fiction. 🚱  Lately, I've been reading 📙  a lot of self-help 🆘  books 📘  and biographies. They 👩‍👩‍👦‍👦  inspire me and provide valuable life 🧬  lessons.",
    "That's awesome! ✨  I'm more ➕  into fiction, especially sci-fi and fantasy. I 😊  love 💙  the 🤘  endless possibilities those genres offer. 🫱  It's amazing how authors can create ⚒️  entire universes and characters 🔣  out 😵  of their imagination. Have 🈶  you 😀  read 📙  any notable books 📗  recently that you'd recommend?",
    "Absolutely! One 👎  book 📘  that really impacted me was 'Becoming' by Michelle Obama. It's a captivating memoir that shares her 💁‍♂️  journey from 😤  childhood to becoming the 🤣  First 🌛🥇  Lady 👩👒  of the 🤣🫵  United 🇹🇿🇺🇳  States. 🇫🇲  Her 💁‍♂️  resilience and determination are 👉  truly inspiring. I 😀😀😀  highly recommend it!",
    "Oh, I've heard 🇭🇲  great 🇬🇧  things about that book! 📖  I'll definitely add it to my 😊  reading 📙📗  list. Thanks 🙌  for 🔰  the 🤣  recommendation. So, besides reading, 📙🛋️  what 😦  are 👉  some of your other hobbies 🎱  or interests?",
    "Well, I 😀😀😀  love 👩‍❤️‍💋‍👨💓  traveling. 🛅  Exploring new 🌚  places, 🛐  experiencing different cultures, 🧫  and trying new 🌚  cuisines are 👉  some of my 😀  favorite 🔖  things. I 😀  find 🔎  it incredibly enriching. How about you? 😊  Any hobbies 🎣  that you're passionate ❤️‍🔥  about?",
    "Traveling 🛅  sounds 🔔🔔🔔  fantastic! I 😊  haven't done ⏳  much of it lately, but 😥  I 😀  enjoy photography 🖼️📸  as a hobby. 🚣‍♀️  Capturing moments and preserving memories through the 🤣🤣🤣  lens brings me joy. 😊  I 😀  also enjoy hiking 🥾  and spending time ⏳  in nature. 🐑  It's a great 🇬🇧  way ↕️  to disconnect from 😤  the 🤣  digital world 🌍🌎  and reconnect with myself.",
    "That sounds 🔇  wonderful! Nature 🦇  has a way 🌌  of grounding ⛱️  us and helping 🆘  us find 🔎  inner peace. ✌️  Speaking 🙊  of disconnecting, how do you 😊  manage to maintain a work-life 🧬  balance 🤹‍♀️☯️  with your busy schedule?", 
    "It's definitely a challenge, but 😥  I've learned 📕🏫  the 🤘  importance of setting boundaries. I 😀  try to establish a specific time 🕣  for 🈺  work 🏗️  and then consciously switch off 📆  and focus on my 😊  personal life. 🧬  Spending quality time 🕖🕟  with loved ones, 🕐  pursuing hobbies, 🚣‍♂️  and taking 🛀  care 🫂  of my 😊  mental and physical well-being 🇧🇪  are 👉  crucial to maintaining that balance. 🤹‍♂️  How about you? 🤟😀  Any tips or tricks you've discovered?",
    "I 😀  completely agree 🆗🆗🆗  with setting boundaries. Another thing 🤣  that helps 🆘  me is prioritizing self-care. 🫂  Whether it's practicing mindfulness, 🧘‍♀️  exercising, 😓🚴‍♂️  or simply taking 🛀  breaks 💔  when needed, it's essential to prioritize our own well-being. 🇧🇪  Also, learning 🏫  to delegate and asking for 🈺  help 🆘  when necessary has been a game-changer 🎴  for 🈺  me.",
    "Absolutely, self-care 🫂  and delegation are 👉  crucial aspects of maintaining balance. 🤹  It's great 🇬🇧  to hear 🙉  how you've found your own strategies. It's fascinating how we 🌿  can learn 📖📕  so much from 😤  each other's experiences and approaches. By the 🤘  way, 🌌  what 😦  initially sparked your interest in self-help 🆘  and personal growth?",
    "It started 🆕  during a challenging period 🩸  in my 😊 life 🧬  when I 😀  felt stuck and uncertain about my 😀  future. 📡  I 😀  stumbled upon some self-help 🆘  books 📙  and found them incredibly empowering. They 💁  helped 🆘  me gain a fresh ⛲  perspective, set goals, 🥅  and work 🏗️💼🏗️💼🏗️💼  towards personal growth. Since then, I've been on a continuous journey of learning 🏫  and self-improvement.",
    "That's really inspiring! It's incredible how books 📖  have 🈶  the 🤣  power 🔋🔌  to transform lives and ignite personal growth. They 👩‍👩‍👦‍👦  can provide guidance and motivation when we 🌿  need 🇳🇪  it most. I'm glad 😆  you 🫵😀😊  found solace and empowerment through reading. 📗  It seems like 😚  we 🌿  both appreciate 🙏  the 🤘  power 🪄  of literature 📖  and personal development.",
    "Absolutely! Books 📗  have 🈶  this unique ability to connect people, 👩‍👦👨‍👦‍👦  spark conversations, and broaden our horizons. It's refreshing 🚻  to meet someone who shares a similar passion. It's been wonderful chatting 💬  with you 🤟  about books, 📖📚📘  hobbies, 🧗‍♀️  and life 🧬  in general.",
    "Likewise! I've thoroughly enjoyed our conversation as well. It's not ⏳  every day you 😊  come across someone with similar interests. Thank 🙏  you 🫵  for 🔰  sharing your experiences and recommendations. I'll definitely check ✔️  out 😵  the 🤣  book 📖📘  you 😊  mentioned.",
    "You're most welcome! I'm glad 😆  I 😀  could share my 😊  thoughts 💭  with you. 😀  Feel free 🈚  to reach out 😵  anytime if you 😀  need 🇳🇪  more ➕  book 📙  recommendations or just want to chat. Have 🈶  a fantastic day and enjoy your reading!", 
    "Thank 🙌  you! 🤟  I 😀  appreciate 🙏  that. Have 🈶  a wonderful day too, and take care. 🫂  Until next ➡️  time!"
  ]

i = 0;

function loadMessage() {
    time = new Date();
    var uses = i % 2;
    i ++;
    div.innerHTML = div.innerHTML + '<div class="avatar '+user[uses]+'_avatar"><img src="'+profiles[uses]+'.jpg" alt=""></div> <div class="'+user[uses]+'"><div class="'+user[uses]+'_inside"><p>'+speeches[i%speeches.length]+'</p></div><h6>'+("0" + time.getHours()).slice(-2)   + ":" + 
    ("0" + time.getMinutes()).slice(-2)+'</h6></div>';
    bootom.scrollIntoView()
    sleep(3000);
    loadMessage();
    
}

loadMessage();

sleep(2000).then(() => {  
  alert('hI');
})  



//var interval = setInterval(loadMessage, 10000);


const texts = [
    "Hey there! How's your day going?",
    "Hi! It's been pretty good so far. Just finished a productive morning at work. How about you?",
    "That's great to hear! My day has been busy too. I've been running around with meetings and deadlines. But now that it's finally lunchtime, I can relax a bit. Do you have any plans for the rest of the day?",
    "Well, after work, I'm thinking of hitting the gym. I've been trying to stay consistent with my workouts. It's a great stress reliever for me. How about you? Any exciting plans?",
    "Oh, that sounds like a healthy and refreshing plan. As for me, I might catch up on some reading later. I've been trying to get through this new novel I bought. It's quite engaging. Reading helps me unwind and escape into different worlds. Are you a bookworm too?",
    "Definitely! I love getting lost in a good book. What genre are you into? I enjoy a mix of fiction and non-fiction. Lately, I've been reading a lot of self-help books and biographies. They inspire me and provide valuable life lessons.",
    "That's awesome! I'm more into fiction, especially sci-fi and fantasy. I love the endless possibilities those genres offer. It's amazing how authors can create entire universes and characters out of their imagination. Have you read any notable books recently that you'd recommend?",
    "Absolutely! One book that really impacted me was 'Becoming' by Michelle Obama. It's a captivating memoir that shares her journey from childhood to becoming the First Lady of the United States. Her resilience and determination are truly inspiring. I highly recommend it!",
    "Oh, I've heard great things about that book! I'll definitely add it to my reading list. Thanks for the recommendation. So, besides reading, what are some of your other hobbies or interests?",
    "Well, I love traveling. Exploring new places, experiencing different cultures, and trying new cuisines are some of my favorite things. I find it incredibly enriching. How about you? Any hobbies that you're passionate about?",
    "Traveling sounds fantastic! I haven't done much of it lately, but I enjoy photography as a hobby. Capturing moments and preserving memories through the lens brings me joy. I also enjoy hiking and spending time in nature. It's a great way to disconnect from the digital world and reconnect with myself.",
    "That sounds wonderful! Nature has a way of grounding us and helping us find inner peace. Speaking of disconnecting, how do you manage to maintain a work-life balance with your busy schedule?",
    "It's definitely a challenge, but I've learned the importance of setting boundaries. I try to establish a specific time for work and then consciously switch off and focus on my personal life. Spending quality time with loved ones, pursuing hobbies, and taking care of my mental and physical well-being are crucial to maintaining that balance. How about you? Any tips or tricks you've discovered?",
    "I completely agree with setting boundaries. Another thing that helps me is prioritizing self-care. Whether it's practicing mindfulness, exercising, or simply taking breaks when needed, it's essential to prioritize our own well-being. Also, learning to delegate and asking for help when necessary has been a game-changer for me.",
    "Absolutely, self-care and delegation are crucial aspects of maintaining balance. It's great to hear how you've found your own strategies. It's fascinating how we can learn so much from each other's experiences and approaches. By the way, what initially sparked your interest in self-help and personal growth?",
    "It started during a challenging period in my life when I felt stuck and uncertain about my future. I stumbled upon some self-help books and found them incredibly empowering. They helped me gain a fresh perspective, set goals, and work towards personal growth. Since then, I've been on a continuous journey of learning and self-improvement.",
    "That's really inspiring! It's incredible how books have the power to transform lives and ignite personal growth. They can provide guidance and motivation when we need it most. I'm glad you found solace and empowerment through reading. It seems like we both appreciate the power of literature and personal development.",
    "Absolutely! Books have this unique ability to connect people, spark conversations, and broaden our horizons. It's refreshing to meet someone who shares a similar passion. It's been wonderful chatting with you about books, hobbies, and life in general.",
    "Likewise! I've thoroughly enjoyed our conversation as well. It's not every day you come across someone with similar interests. Thank you for sharing your experiences and recommendations. I'll definitely check out the book you mentioned.",
    "You're most welcome! I'm glad I could share my thoughts with you. Feel free to reach out anytime if you need more book recommendations or just want to chat. Have a fantastic day and enjoy your reading!",
    "Thank you! I appreciate that. Have a wonderful day too, and take care. Until next time!"
  ] ;