// Añade el número destinatario con código de país, solo dígitos. Ejemplo: 573001234567.
const WHATSAPP_NUMBER = '573043531800';
const MESSAGE = 'Sí, quiero ser tu amigo por siempre 💚 Gracias por esta sorpresa tan bonita. Yo también te amo y te elijo, una y otra vez. 🥹';
const steps = [
  {title:'¿Sabes qué me pasa contigo?',description:'Elige una. Aquí no hay respuestas incorrectas, solo excusas para coquetear.',choices:['Sonríes y se me olvida todo 🙈','Te extraño más de la cuenta 💭','Las dos, obvio 💘'],reply:'La verdad… las dos. Tienes esa manera de hacerme sonreír incluso cuando no estás cerca.'},
  {title:'Si pudiera pedir un deseo…',description:'¿Cuál crees que sería? Pista: tú tienes mucho que ver.',choices:['Un abrazo tuyo 🤗','Mil aventuras juntos ✨','Que nunca nos faltemos ♡'],reply:'Pediría que nunca nos faltemos. Y de paso, un abrazo largo y mil aventuras contigo.'},
  {title:'Una última cosita…',description:'Si la vida fuera una película, ¿qué papel te daría?',choices:['Mi persona favorita 🌷','Mi cómplice de locuras 🎬','Quien se queda hasta el final 🫶'],reply:'Todos esos. Porque contigo hasta los días normales se sienten un poquito más especiales.'}
];
const $ = id => document.getElementById(id);
let current = 0;
function show(id){['intro','game','ending'].forEach(name => $(name).hidden = name !== id);}
function render(){const step=steps[current];$('progress').textContent=`0${current+1} / 03 · UNA CONFESIÓN A LA VEZ`;$('game-title').textContent=step.title;$('game-description').textContent=step.description;$('feedback').textContent='';$('next').hidden=true;$('choices').replaceChildren();step.choices.forEach(label=>{const button=document.createElement('button');button.textContent=label;button.setAttribute('aria-pressed','false');button.addEventListener('click',()=>{Array.from($('choices').children).forEach(b=>b.setAttribute('aria-pressed',String(b===button)));$('feedback').textContent=step.reply;$('next').hidden=false;});$('choices').append(button);});$('game-title').focus();}
$('begin').addEventListener('click',()=>{current=0;show('game');render();});
$('next').addEventListener('click',()=>{if(current<steps.length-1){current++;render();}else{show('ending');$('ending-title').focus();}});
$('think').addEventListener('click',()=>{$('think-note').textContent='Tómate tu tiempo. Mi cariño no tiene cuenta regresiva. ♡';});
$('restart').addEventListener('click',()=>{show('intro');$('think-note').textContent='';$('begin').focus();});
$('whatsapp').href=`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;
if(!WHATSAPP_NUMBER){$('whatsapp-note').textContent='Se abrirá WhatsApp para que elijas el contacto y envíes tu respuesta.';}
