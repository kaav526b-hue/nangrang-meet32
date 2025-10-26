// app.js (모듈)
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getFirestore, collection, getDocs, query, where, orderBy } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyDaTFgAP0n-qmr5NOOD_jeNAFhQuY_kkfM",
  authDomain: "nangrang-meet32.firebaseapp.com",
  projectId: "nangrang-meet32",
  storageBucket: "nangrang-meet32.firebasestorage.app",
  messagingSenderId: "1014148883717",
  appId: "1:1014148883717:web:338eba4b9bc51482e6c36c"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);
const root = document.getElementById('root');

function renderGroup(title, list) {
  const box = document.createElement('div');
  box.className = 'box';
  const h2 = document.createElement('h2');
  h2.textContent = `${title} (${list.length}명)`;
  box.appendChild(h2);

  const ul = document.createElement('ul');
  list.forEach(p => {
    const li = document.createElement('li');
    li.textContent = `${String(p.number).padStart(2, '0')} - ${p.name}`;
    ul.appendChild(li);
  });
  box.appendChild(ul);
  root.appendChild(box);
}

async function main() {
  try {
    const qD = query(collection(db, 'participants'), where('group', '==', '달님반'), orderBy('number', 'asc'));
    const qH = query(collection(db, 'participants'), where('group', '==', '햇님반'), orderBy('number', 'asc'));

    const [snapD, snapH] = await Promise.all([getDocs(qD), getDocs(qH)]);
    const dal = snapD.docs.map(d => d.data());
    const hae = snapH.docs.map(d => d.data());

    renderGroup('달님반', dal);
    renderGroup('햇님반', hae);

    const p = document.createElement('p');
    p.className = 'ok';
    p.textContent = '✅ 데이터 로드 완료!';
    root.appendChild(p);
  } catch (err) {
    const p = document.createElement('p');
    p.className = 'err';
    p.textContent = '❌ 데이터 로드 중 오류:\n' + (err?.message || String(err));
    root.appendChild(p);
  }
}

main();
