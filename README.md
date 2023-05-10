Private repo pre aplikacie pripojene do Hasura **dev-app** https://cloud.hasura.io/project/27800a3e-d2d3-49f2-a1ae-c2b508a6c8ae/console/

## Deploy

Kazda branch v tomto repe je automaticky nasadena pomocou Netlify (netreba robit pull request len kvoly nasadeniu) https://docs.netlify.com/site-deploys/overview/#branch-deploys-versus-deploy-previews.

## Builds:
* produkcny build bez iteria.tools (nie je vobez v bundle - nepocitam component-templates a helpers z graphql-lowcode)
* developersky build zobrazuje injektnuty iteria.tools

## Vyvoj
* Vyvoj novych features generatora robit v branch https://github.com/iteria-app/lowcode-monorepo
* Vyvoj novych aplikacii robit v tomto repo pretoze potrebujeme vypublikovane balicky lowcode (iteria.tools)
* Uplne nova aplikacia casto krat potrebuje vylepsit generator a vyvoj moze zacat v branch https://github.com/iteria-app/lowcode-monorepo a potom treba presunut zdrojaky sem, aby sme lahko odpojili iteria.tools v produkcnom builde a uistili sa, ze ideme oproti vypublikovanym balickom
