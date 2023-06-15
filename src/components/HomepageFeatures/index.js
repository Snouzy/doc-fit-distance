import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Facile à utiliser',
    Svg: require('@site/static/img/easy.svg').default,
    description: (
      <>
        Tout a été simplifié au max. Nos docs sont hyper clairs et l’interface, c’est du gâteau. Même si t'es pas un pro de la techno, tu vas naviguer comme un chef.
        La documentation a été designée debut le début pour être, rapide, facilement navigable et agréable à utiliser !
      </>
    ),
  },
  {
    title: 'Focalise-toi sur l\'essentiel',
    Svg: require('@site/static/img/focus.svg').default,
    description: (
      <>
        On va droit au but avec des docs qui vont t'aider à choper rapidement ce dont t'as besoin, sans te noyer dans un océan de blabla. Viens donc explorer nos ressources et débarrasse-toi de l’inutile.
      </>
    ),
  },
  {
    title: 'Mis à jour régulièrement',
    Svg: require('@site/static/img/update.svg').default,
    description: (
      <>
        L'actualisation de nos docs suit l'actualisation de l'app pour que tu aies toujours les infos les plus fraîches en main. Que tu cherches des guides, des tutos ou des réponses à des questions techniques, on a ce qu'il te faut.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
