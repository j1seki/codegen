// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fhE2RzKLHLiqj99HiV4Dhd
// Component: m3fvzKUdbJxt

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: KCPTWBmlBdUh/component
import { Reveal } from "@plasmicpkgs/react-awesome-reveal";
import YouTube from "@plasmicpkgs/react-youtube";

import { useScreenVariants as useScreenVariantsl4LUknZr4Acq } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: l4LUknZr4acq/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_vercel_workflow.module.css"; // plasmic-import: fhE2RzKLHLiqj99HiV4Dhd/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: m3fvzKUdbJxt/css

import Icon6Icon from "./icons/PlasmicIcon__Icon6"; // plasmic-import: TvRV0k_Tpafc/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: CPbFIei8Ia1X/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: svI13OzPoUxY/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: DW3mpgI_kpkl/icon
import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: RHyoFQoXjNqr/icon

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  youTube?: p.Flex<typeof YouTube>;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsl4LUknZr4Acq()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__iXf84)}
          >
            <Icon6Icon
              className={classNames(projectcss.all, sty.svg___28Zz)}
              role={"img"}
            />

            <div className={classNames(projectcss.all, sty.freeBox___1ScpN)} />

            <Button
              className={classNames("__wab_instance", sty.button__igaki)}
              color={"white"}
              submitsForm={true}
            >
              {"Start trial"}
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__ak6W0)}
              color={"clear"}
              submitsForm={true}
            >
              {"Book demo"}
            </Button>
          </p.Stack>
          <h1
            className={classNames(
              projectcss.all,
              projectcss.h1,
              projectcss.__wab_text,
              sty.h1__hyXzw
            )}
          >
            {"A better way to build software"}
          </h1>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__bKyl
            )}
          >
            {
              "Go from idea to production with the fastest workflow for frontend teams."
            }
          </div>
          <Icon3Icon
            className={classNames(projectcss.all, sty.svg__rt2Wh)}
            role={"img"}
          />

          <div className={classNames(projectcss.all, sty.freeBox__ync0)}>
            <div className={classNames(projectcss.all, sty.freeBox__m4Skv)}>
              <div className={classNames(projectcss.all, sty.freeBox___5FCb)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__sh9Hv
                  )}
                >
                  {"1"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__ibQ9Q)} />
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__vPxOf)}>
              <div className={classNames(projectcss.all, sty.freeBox__kr2Js)}>
                <Reveal
                  className={classNames("__wab_instance", sty.reveal__rkZa)}
                  triggerOnce={true}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2___61QT0
                    )}
                  >
                    {"Develop"}
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tahm4
                    )}
                  >
                    {
                      "Unlock developer productivity. Long builds, complex config, and disjointed tools break the development process. Remove the obstacles individual contributors face by giving them a better toolkit."
                    }
                  </div>
                </Reveal>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__w0Khy)}>
                <div className={classNames(projectcss.all, sty.freeBox__vimZn)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__qeLi, "rotate")}
                    displayHeight={"900px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"900px"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/vercel_workflow/images/image.svg",
                      fullWidth: 150,
                      fullHeight: 150,
                      aspectRatio: 1
                    }}
                  />
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__yOwJv)}>
                <Reveal
                  className={classNames("__wab_instance", sty.reveal__fqTdR)}
                  triggerOnce={true}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__fnleH)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__jdBa7)}
                      displayHeight={"50px"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/vercel_workflow/images/image2.png",
                        fullWidth: 602,
                        fullHeight: 273,
                        aspectRatio: undefined
                      }}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__w5U5O
                      )}
                    >
                      {"73%"}
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___9I1Sr
                      )}
                    >
                      {"faster project creation with Vercel"}
                    </div>
                  </div>
                </Reveal>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__cLsAx)}>
                <Reveal
                  className={classNames("__wab_instance", sty.reveal__aau5Z)}
                  triggerOnce={true}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___31OXb)}
                  >
                    <h3
                      className={classNames(
                        projectcss.all,
                        projectcss.h3,
                        projectcss.__wab_text,
                        sty.h3__jdSf2
                      )}
                    >
                      {"4 ways to improve your frontend workflow"}
                    </h3>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___0SIiL
                      )}
                    >
                      {
                        "Learn what makes a healthy Web development workflow and how Vercel accelerates that journey at every stage while making the developer experience genuinely great."
                      }
                    </div>
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button___4Ea9C
                      )}
                      color={"white"}
                      submitsForm={true}
                    >
                      {"Get the guide"}
                    </Button>
                  </p.Stack>
                </Reveal>
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__uJgQn)}>
            <div className={classNames(projectcss.all, sty.freeBox__swOfK)}>
              <div className={classNames(projectcss.all, sty.freeBox__y4Mxj)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__gFaln
                  )}
                >
                  {"2"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__drozg)} />
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__wYmO3)}>
              <div className={classNames(projectcss.all, sty.freeBox__tHLnd)}>
                <Reveal
                  className={classNames("__wab_instance", sty.reveal__m53Fw)}
                  triggerOnce={true}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__bzQy6
                    )}
                  >
                    {"Preview"}
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__q56Et
                    )}
                  >
                    {
                      "Collaborate instantly. Automatic production-grade staging and zero-config CI/CD makes it fast and easy to collect feedback and share ideas across teams."
                    }
                  </div>
                </Reveal>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__oe771)}>
                <Reveal
                  className={classNames("__wab_instance", sty.reveal__hkTOq)}
                  triggerOnce={true}
                >
                  <YouTube
                    data-plasmic-name={"youTube"}
                    data-plasmic-override={overrides.youTube}
                    className={classNames("__wab_instance", sty.youTube)}
                    videoId={"R6MeLqRQzYw"}
                  />
                </Reveal>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox___6GDp5)}>
                <Reveal
                  className={classNames("__wab_instance", sty.reveal__aLRtm)}
                  triggerOnce={true}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__rmWoy)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__aaqoK)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"175px"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/vercel_workflow/images/image3.svg",
                        fullWidth: 300,
                        fullHeight: 45,
                        aspectRatio: 6.729167
                      }}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__gFe95
                      )}
                    >
                      {"77%"}
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__wjJxm
                      )}
                    >
                      {"faster builds with Vercel and Next.js"}
                    </div>
                  </div>
                </Reveal>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__cxZhv)}>
                <Reveal
                  className={classNames("__wab_instance", sty.reveal___2A00N)}
                  triggerOnce={true}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__vKg6N)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__rPnez
                      )}
                    >
                      {"1.2M"}
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__unwpO
                      )}
                    >
                      {"faster builds with Vercel and Next.js"}
                    </div>
                  </p.Stack>
                </Reveal>
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__dsLb)}>
            <div className={classNames(projectcss.all, sty.freeBox__lr4J)}>
              <div className={classNames(projectcss.all, sty.freeBox___0XTeo)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__iDi
                  )}
                >
                  {"3"}
                </div>
              </div>
              <div
                className={classNames(projectcss.all, sty.freeBox___4Vr3D)}
              />
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__h3T6S)}>
              <div className={classNames(projectcss.all, sty.freeBox__lRmuv)}>
                <h2
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2__kKsn
                  )}
                >
                  {"Ship"}
                </h2>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__a92Uj
                  )}
                >
                  {
                    "Great DX leads to great UX. Focus your team on measuring and iterating instead of managing infrastructure, performance, and security."
                  }
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__gFRpJ)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__tHChx)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"196px"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/vercel_workflow/images/image4.png",
                    fullWidth: 300,
                    fullHeight: 68,
                    aspectRatio: undefined
                  }}
                />

                <div className={classNames(projectcss.all, sty.freeBox__ldAP)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__pWXa)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__bvJtk
                      )}
                    >
                      {"90"}
                    </div>
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__zoHrE
                    )}
                  >
                    {"Site performance score with Vercel"}
                  </div>
                </div>
              </div>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__iyqt0)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__lJHg
                  )}
                >
                  {"25B+"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__cyOoX
                  )}
                >
                  {"requests per week to Vercel\u2019s Edge network"}
                </div>
              </p.Stack>
            </div>
          </div>
          <h1
            className={classNames(
              projectcss.all,
              projectcss.h1,
              projectcss.__wab_text,
              sty.h1__dvUCv
            )}
          >
            {"Develop, preview, and ship faster with Vercel"}
          </h1>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__p3HvZ)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__dI7Cs)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__evJ1W)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__i9SAx
                  )}
                >
                  {"4 ways to improve your frontend workflow"}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__vjBb0
                  )}
                >
                  {
                    "Learn what makes a healthy Web development workflow and how Vercel accelerates that journey at every stage while making the developer experience genuinely great."
                  }
                </div>
                <Button
                  className={classNames("__wab_instance", sty.button__zzJm6)}
                  color={"white"}
                  submitsForm={true}
                >
                  {"Get the guide"}
                </Button>
              </p.Stack>
              <Icon5Icon
                className={classNames(projectcss.all, sty.svg__cs4Oe)}
                role={"img"}
              />
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__jzoB2)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__c78Ol)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__qigH
                  )}
                >
                  {"4 ways to improve your frontend workflow"}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___8R61C
                  )}
                >
                  {
                    "Learn what makes a healthy Web development workflow and how Vercel accelerates that journey at every stage while making the developer experience genuinely great."
                  }
                </div>
                <Button
                  className={classNames("__wab_instance", sty.button__eZeYc)}
                  color={"white"}
                  submitsForm={true}
                >
                  {"Get the guide"}
                </Button>
              </p.Stack>
              <Icon5Icon
                className={classNames(projectcss.all, sty.svg__elvJn)}
                role={"img"}
              />
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__cTFme)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__fnSEx)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__aBz3K
                  )}
                >
                  {"4 ways to improve your frontend workflow"}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__vU9YD
                  )}
                >
                  {
                    "Learn what makes a healthy Web development workflow and how Vercel accelerates that journey at every stage while making the developer experience genuinely great."
                  }
                </div>
                <Button
                  className={classNames("__wab_instance", sty.button__nFPmr)}
                  color={"white"}
                  submitsForm={true}
                >
                  {"Get the guide"}
                </Button>
              </p.Stack>
              <Icon5Icon
                className={classNames(projectcss.all, sty.svg__slLn4)}
                role={"img"}
              />
            </div>
            <div className={classNames(projectcss.all, sty.freeBox___31FOs)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__fvvr7)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__n40I1
                  )}
                >
                  {"4 ways to improve your frontend workflow"}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__iMeY
                  )}
                >
                  {
                    "Learn what makes a healthy Web development workflow and how Vercel accelerates that journey at every stage while making the developer experience genuinely great."
                  }
                </div>
                <Button
                  className={classNames("__wab_instance", sty.button__bI6J0)}
                  color={"white"}
                  submitsForm={true}
                >
                  {"Get the guide"}
                </Button>
              </p.Stack>
              <Icon5Icon
                className={classNames(projectcss.all, sty.svg__g7KDv)}
                role={"img"}
              />
            </div>
          </p.Stack>
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__ddifQ)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"460px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/vercel_workflow/images/image5.svg",
              fullWidth: 156,
              fullHeight: 150,
              aspectRatio: 1.040541
            }}
          />

          <h2
            className={classNames(
              projectcss.all,
              projectcss.h2,
              projectcss.__wab_text,
              sty.h2__xxeVj
            )}
          >
            {"Unlock a better workflow. Make the Web. Faster."}
          </h2>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__fbE0F)}
          >
            <Button
              className={classNames("__wab_instance", sty.button__yfvr5)}
              color={"white"}
              submitsForm={true}
            >
              {"Start trial"}
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__mDPxn)}
              color={"clear"}
              submitsForm={true}
            >
              {"Book demo"}
            </Button>
          </p.Stack>
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "youTube"],
  youTube: ["youTube"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  youTube: typeof YouTube;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    youTube: makeNodeComponent("youTube"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */