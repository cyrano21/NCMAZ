import Image from "components/Image";
import React from "react";

const SingleContentDemo = () => {
  return (
    <>
      {/* CECI EST LE CONTENU DE DÉMO - VOUS POUVEZ UTILISER MARKDOWN, JSON ... */}
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vel
        officiis ipsum placeat itaque neque dolorem modi perspiciatis dolor
        distinctio veritatis sapiente, minima corrupti dolores necessitatibus
        suscipit accusantium dignissimos culpa cumque.
      </p>
      <p>
        Il est un fait établi depuis longtemps qu&apos;un{" "}
        <strong>lecteur</strong> sera distrait par le contenu lisible d&apos;une
        page lorsqu&apos;il regarde sa <strong>mise en page</strong>.
        L&apos;intérêt d&apos;utiliser Lorem Ipsum est qu&apos;il a une
        distribution de lettres plus ou moins normale, contrairement à
        l&apos;utilisation de contenus ici...
        <a href="/#" target="_blank" rel="noopener noreferrer">
          en savoir plus.
        </a>{" "}
      </p>
      <ol>
        <li>Nous voulons que tout soit beau dès la sortie de la boîte.</li>
        <li>
          {` Vraiment juste la première raison, c&apos;est tout le but du plugin.`}
        </li>
        <li>
          {` Voici une troisième raison fictive, bien qu&apos;une liste avec trois
          éléments semble plus réaliste qu&apos;une liste avec deux éléments.`}
        </li>
      </ol>
      <h3>La typographie doit être facile</h3>
      <p>
        {`  C&apos;est un en-tête pour vous — avec un peu de chance, si nous avons bien
        fait notre travail, cela aura l&apos;air assez raisonnable.`}
      </p>
      <p>
        Quelqu&apos;un de sage m&apos;a dit un jour à propos de la typographie :
      </p>
      <blockquote>
        <p>
          {` La typographie est assez importante si vous ne voulez pas que votre
          contenu ressemble à du gâchis. Faites-le bien et il ne sera pas mauvais.`}
        </p>
      </blockquote>
      <p>
        {`  Il est probablement important que les images aient également l&apos;air correct ici par défaut:`}
      </p>
      <figure>
        <Image
          src="https://images.unsplash.com/photo-1501493870936-9c2e41625521?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1045&q=80"
          alt="nc blog"
          sizes="(max-width: 1024px) 100vw, 1240px"
          className="rounded-2xl"
          width={1635}
          height={774}
        />
        <figcaption>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vel
          officiis ipsum placeat itaque neque dolorem modi perspiciatis dolor
          distinctio veritatis sapiente
        </figcaption>
      </figure>
      <p>
        {`   Maintenant, je vais vous montrer un exemple de liste non ordonnée pour
        m&apos;assurer que cela a également l&apos;air correct:`}
      </p>
      <ul>
        <li>Donc, voici le premier élément de cette liste.</li>
        <li>{`Dans cet exemple, nous gardons les éléments courts.`}</li>
        <li>{`Plus tard, nous utiliserons des éléments de liste plus longs et plus complexes.`}</li>
      </ul>
      <p>{`Et c&apos;est la fin de cette section.`}</p>
      <h2>Le code devrait avoir l&apos;air correct par défaut.</h2>
      <p>
        Je pense que la plupart des gens vont utiliser{" "}
        <a href="https://highlightjs.org/">highlight.js</a> ou{" "}
        <a href="https://prismjs.com/">Prism</a> ou quelque chose de ce genre
        s&apos;ils veulent <em>styliser</em> leurs blocs de code mais cela ne
        ferait pas de mal de les rendre acceptables <em>par défaut</em>, même
        sans syntaxe de mise en surbrillance.
      </p>
      <p>
        {`  Ce que j&apos;ai écrit ici est probablement assez long, mais ajouter cette
        phrase finale ne peut pas faire de mal.`}
      </p>
      <pre className="!rounded-2xl">
        <code className="language-js">
          {`function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
} `}
        </code>
      </pre>
      <p>Espérons que cela vous semble suffisamment bon.</p>
      <h3>Nous devons encore penser aux en-têtes empilés cependant.</h3>
      <h4>
        {` Assurons-nous de ne pas gâcher cela avec des éléments <code>h4</code>,
        non plus.`}
      </h4>
      <p>
        Ouf, avec un peu de chance, nous avons stylisé les en-têtes ci-dessus de
        ce texte et ils ont l&apos;air assez bons.
      </p>
      <p>
        {` Ajoutons un paragraphe de clôture ici afin que les choses se terminent
        par un bloc de texte de taille décente. Je ne peux pas expliquer
        pourquoi je veux que les choses se terminent de cette façon, mais je
        dois supposer que c&apos;est parce que je pense que les choses auront l&apos;air
        bizarre ou déséquilibrées s&apos;il y a un en-tête trop près de la fin du
        document.`}
      </p>
      <p>
        {`  Ce que j&apos;ai écrit ici est probablement assez long, mais ajouter cette
        phrase finale ne peut pas faire de mal.`}
      </p>
    </>
  );
};

export default SingleContentDemo;
