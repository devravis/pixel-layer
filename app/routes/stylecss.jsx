import db from "../db.server";

export async function loader({ request }) {
  const url = new URL(request.url);
  const shop = url.searchParams.get("shop");

  let store = null;

  if (shop) {
    store = await db.session.findFirst({
      where: { shop },
      orderBy: { id: "desc" },
    });
  }

  return new Response(
    `
@charset "UTF-8";

*,
*::before,
*::after {
  box-sizing: border-box;
}


:root {
  --c-primary: ${store?.primary || "#673ee5"};
  --c-secondary: ${store?.secondary || "#e91e63"};
  --c-success: ${store?.success || "#4caf50"};
  --c-danger: ${store?.danger || "#f44336"};
  --c-warning: ${store?.warning || "#ff9800"};
  --c-info: ${store?.info || "#2196f3"};
  --c-white: #ffffff;
  --c-black: #000000;
  --c-dark: ${store?.dark || "#212121"};
}

body {
  margin: 0;
  padding: 0;
}

.bgc-primary {
  background-color: var(--c-primary);
}

.bgc-secondary {
  background-color: var(--c-secondary);
}

.bgc-success {
  background-color: var(--c-success);
}

.bgc-danger {
  background-color: var(--c-danger);
}

.bgc-warning {
  background-color: var(--c-warning);
}

.bgc-info {
  background-color: var(--c-info);
}

.bgc-white {
  background-color: var(--c-white);
}

.bgc-black {
  background-color: var(--c-black);
}

.bgc-dark {
  background-color: var(--c-dark);
}

.tc-primary {
  color: var(--c-primary);
}

.tc-secondary {
  color: var(--c-secondary);
}

.tc-success {
  color: var(--c-success);
}

.tc-danger {
  color: var(--c-danger);
}

.tc-warning {
  color: var(--c-warning);
}

.tc-info {
  color: var(--c-info);
}

.tc-white {
  color: var(--c-white);
}

.tc-black {
  color: var(--c-black);
}

.tc-dark {
  color: var(--c-dark);
}

.bw-0 {
  border-width: 0;
}

.bw-1 {
  border-width: 1px;
}

.bw-2 {
  border-width: 2px;
}

.bw-3 {
  border-width: 3px;
}

.bw-4 {
  border-width: 4px;
}

.bw-5 {
  border-width: 5px;
}

.bs-solid {
  border-style: solid;
}

.bs-dashed {
  border-style: dashed;
}

.bs-dotted {
  border-style: dotted;
}

.bc-primary {
  border-color: var(--c-primary);
}

.bc-secondary {
  border-color: var(--c-secondary);
}

.bc-success {
  border-color: var(--c-success);
}

.bc-danger {
  border-color: var(--c-danger);
}

.bc-warning {
  border-color: var(--c-warning);
}

.bc-info {
  border-color: var(--c-info);
}

.bc-white {
  border-color: var(--c-white);
}

.bc-black {
  border-color: var(--c-black);
}

.bc-dark {
  border-color: var(--c-dark);
}

/* Desktop Font Size (4px → 80px) */
.dt-font4 {
  font-size: 4px;
}

.dt-font8 {
  font-size: 8px;
}

.dt-font12 {
  font-size: 12px;
}

.dt-font16 {
  font-size: 16px;
}

.dt-font20 {
  font-size: 20px;
}

.dt-font24 {
  font-size: 24px;
}

.dt-font28 {
  font-size: 28px;
}

.dt-font32 {
  font-size: 32px;
}

.dt-font36 {
  font-size: 36px;
}

.dt-font40 {
  font-size: 40px;
}

.dt-font44 {
  font-size: 44px;
}

.dt-font48 {
  font-size: 48px;
}

.dt-font52 {
  font-size: 52px;
}

.dt-font56 {
  font-size: 56px;
}

.dt-font60 {
  font-size: 60px;
}

.dt-font64 {
  font-size: 64px;
}

.dt-font68 {
  font-size: 68px;
}

.dt-font72 {
  font-size: 72px;
}

.dt-font76 {
  font-size: 76px;
}

.dt-font80 {
  font-size: 80px;
}

/* Tablet */
@media (max-width: 991px) {
  .tab-font4 {
    font-size: 4px !important;
  }

  .tab-font8 {
    font-size: 8px !important;
  }

  .tab-font12 {
    font-size: 12px !important;
  }

  .tab-font16 {
    font-size: 16px !important;
  }

  .tab-font20 {
    font-size: 20px !important;
  }

  .tab-font24 {
    font-size: 24px !important;
  }

  .tab-font28 {
    font-size: 28px !important;
  }

  .tab-font32 {
    font-size: 32px !important;
  }

  .tab-font36 {
    font-size: 36px !important;
  }

  .tab-font40 {
    font-size: 40px !important;
  }

  .tab-font44 {
    font-size: 44px !important;
  }

  .tab-font48 {
    font-size: 48px !important;
  }

  .tab-font52 {
    font-size: 52px !important;
  }

  .tab-font56 {
    font-size: 56px !important;
  }

  .tab-font60 {
    font-size: 60px !important;
  }

  .tab-font64 {
    font-size: 64px !important;
  }

  .tab-font68 {
    font-size: 68px !important;
  }

  .tab-font72 {
    font-size: 72px !important;
  }

  .tab-font76 {
    font-size: 76px !important;
  }

  .tab-font80 {
    font-size: 80px !important;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .mob-font4 {
    font-size: 4px !important;
  }

  .mob-font8 {
    font-size: 8px !important;
  }

  .mob-font12 {
    font-size: 12px !important;
  }

  .mob-font16 {
    font-size: 16px !important;
  }

  .mob-font20 {
    font-size: 20px !important;
  }

  .mob-font24 {
    font-size: 24px !important;
  }

  .mob-font28 {
    font-size: 28px !important;
  }

  .mob-font32 {
    font-size: 32px !important;
  }

  .mob-font36 {
    font-size: 36px !important;
  }

  .mob-font40 {
    font-size: 40px !important;
  }

  .mob-font44 {
    font-size: 44px !important;
  }

  .mob-font48 {
    font-size: 48px !important;
  }

  .mob-font52 {
    font-size: 52px !important;
  }

  .mob-font56 {
    font-size: 56px !important;
  }

  .mob-font60 {
    font-size: 60px !important;
  }

  .mob-font64 {
    font-size: 64px !important;
  }

  .mob-font68 {
    font-size: 68px !important;
  }

  .mob-font72 {
    font-size: 72px !important;
  }

  .mob-font76 {
    font-size: 76px !important;
  }

  .mob-font80 {
    font-size: 80px !important;
  }
}

.fw-100 {
  font-weight: 100;
}

.fw-200 {
  font-weight: 200;
}

.fw-300 {
  font-weight: 300;
}

.fw-400 {
  font-weight: 400;
}

.fw-500 {
  font-weight: 500;
}

.fw-600 {
  font-weight: 600;
}

.fw-700 {
  font-weight: 700;
}

.fw-800 {
  font-weight: 800;
}

.fw-900 {
  font-weight: 900;
}

.lh-4 {
  line-height: 4px;
}

.lh-8 {
  line-height: 8px;
}

.lh-12 {
  line-height: 12px;
}

.lh-16 {
  line-height: 16px;
}

.lh-20 {
  line-height: 20px;
}

.lh-24 {
  line-height: 24px;
}

.lh-28 {
  line-height: 28px;
}

.lh-32 {
  line-height: 32px;
}

.lh-36 {
  line-height: 36px;
}

.lh-40 {
  line-height: 40px;
}

.lh-44 {
  line-height: 44px;
}

.lh-48 {
  line-height: 48px;
}

.lh-52 {
  line-height: 52px;
}

.lh-56 {
  line-height: 56px;
}

.lh-60 {
  line-height: 60px;
}

.lh-64 {
  line-height: 64px;
}

.lh-68 {
  line-height: 68px;
}

.lh-72 {
  line-height: 72px;
}

.lh-76 {
  line-height: 76px;
}

.lh-80 {
  line-height: 80px;
}

.fs-normal {
  font-style: normal;
}

.fs-italic {
  font-style: italic;
}

.fs-oblique {
  font-style: oblique;
}

.container {
  max-width: ${store?.containerMaxWidth ?? "1200px"};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${store?.paddingDesktop ?? "20px"};
  padding-right: ${store?.paddingDesktop ?? "20px"};
}

/* Tablet */
@media (max-width: 991px) {
  .container {
    padding-left: ${store?.paddingTablet ?? "15px"};
    padding-right: ${store?.paddingTablet ?? "15px"};
  }
}

/* Mobile */
@media (max-width: 767px) {
  .container {
    padding-left: ${store?.paddingMobile ?? "10px"};
    padding-right: ${store?.paddingMobile ?? "10px"};
  }
}

/* ROW */
.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -${store?.paddingDesktop ?? "20px"};
  margin-right: -${store?.paddingDesktop ?? "20px"};
}

/* Tablet */
@media (max-width: 991px) {
  .row {
    margin-left: -${store?.paddingTablet ?? "15px"};
    margin-right: -${store?.paddingTablet ?? "15px"};
  }
}

/* Mobile */
@media (max-width: 767px) {
  .row {
    margin-left: -${store?.paddingMobile ?? "10px"};
    margin-right: -${store?.paddingMobile ?? "10px"};
  }
}

/* COL */
[class*=col-] {
  padding-left: ${store?.paddingDesktop ?? "20px"};
  padding-right: ${store?.paddingDesktop ?? "20px"};
}

@media (max-width: 991px) {
  [class*=col-] {
    padding-left: ${store?.paddingTablet ?? "15px"};
    padding-right: ${store?.paddingTablet ?? "15px"};
  }
}

@media (max-width: 767px) {
  [class*=col-] {
    padding-left: ${store?.paddingMobile ?? "10px"};
    padding-right: ${store?.paddingMobile ?? "10px"};
  }
}

[class*=col-] {
  width: 100%;
}

@media (min-width: 992px) {
  .col-dt-1 {
    width: 8.3333333333%;
  }

  .col-dt-2 {
    width: 16.6666666667%;
  }

  .col-dt-3 {
    width: 25%;
  }

  .col-dt-4 {
    width: 33.3333333333%;
  }

  .col-dt-5 {
    width: 41.6666666667%;
  }

  .col-dt-6 {
    width: 50%;
  }

  .col-dt-7 {
    width: 58.3333333333%;
  }

  .col-dt-8 {
    width: 66.6666666667%;
  }

  .col-dt-9 {
    width: 75%;
  }

  .col-dt-10 {
    width: 83.3333333333%;
  }

  .col-dt-11 {
    width: 91.6666666667%;
  }

  .col-dt-12 {
    width: 100%;
  }
}

@media (max-width: 991px) {
  .col-tab-1 {
    width: 8.3333333333%;
  }

  .col-tab-2 {
    width: 16.6666666667%;
  }

  .col-tab-3 {
    width: 25%;
  }

  .col-tab-4 {
    width: 33.3333333333%;
  }

  .col-tab-5 {
    width: 41.6666666667%;
  }

  .col-tab-6 {
    width: 50%;
  }

  .col-tab-7 {
    width: 58.3333333333%;
  }

  .col-tab-8 {
    width: 66.6666666667%;
  }

  .col-tab-9 {
    width: 75%;
  }

  .col-tab-10 {
    width: 83.3333333333%;
  }

  .col-tab-11 {
    width: 91.6666666667%;
  }

  .col-tab-12 {
    width: 100%;
  }
}

@media (max-width: 767px) {
  .col-mob-1 {
    width: 8.3333333333%;
  }

  .col-mob-2 {
    width: 16.6666666667%;
  }

  .col-mob-3 {
    width: 25%;
  }

  .col-mob-4 {
    width: 33.3333333333%;
  }

  .col-mob-5 {
    width: 41.6666666667%;
  }

  .col-mob-6 {
    width: 50%;
  }

  .col-mob-7 {
    width: 58.3333333333%;
  }

  .col-mob-8 {
    width: 66.6666666667%;
  }

  .col-mob-9 {
    width: 75%;
  }

  .col-mob-10 {
    width: 83.3333333333%;
  }

  .col-mob-11 {
    width: 91.6666666667%;
  }

  .col-mob-12 {
    width: 100%;
  }
}

.dt-p-0 {
  padding: 0px;
}

.dt-pt-0 {
  padding-top: 0px;
}

.dt-pb-0 {
  padding-bottom: 0px;
}

.dt-pl-0 {
  padding-left: 0px;
}

.dt-pr-0 {
  padding-right: 0px;
}

.dt-px-0 {
  padding-left: 0px;
  padding-right: 0px;
}

.dt-py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}

.dt-p-5 {
  padding: 5px;
}

.dt-pt-5 {
  padding-top: 5px;
}

.dt-pb-5 {
  padding-bottom: 5px;
}

.dt-pl-5 {
  padding-left: 5px;
}

.dt-pr-5 {
  padding-right: 5px;
}

.dt-px-5 {
  padding-left: 5px;
  padding-right: 5px;
}

.dt-py-5 {
  padding-top: 5px;
  padding-bottom: 5px;
}

.dt-p-10 {
  padding: 10px;
}

.dt-pt-10 {
  padding-top: 10px;
}

.dt-pb-10 {
  padding-bottom: 10px;
}

.dt-pl-10 {
  padding-left: 10px;
}

.dt-pr-10 {
  padding-right: 10px;
}

.dt-px-10 {
  padding-left: 10px;
  padding-right: 10px;
}

.dt-py-10 {
  padding-top: 10px;
  padding-bottom: 10px;
}

.dt-p-15 {
  padding: 15px;
}

.dt-pt-15 {
  padding-top: 15px;
}

.dt-pb-15 {
  padding-bottom: 15px;
}

.dt-pl-15 {
  padding-left: 15px;
}

.dt-pr-15 {
  padding-right: 15px;
}

.dt-px-15 {
  padding-left: 15px;
  padding-right: 15px;
}

.dt-py-15 {
  padding-top: 15px;
  padding-bottom: 15px;
}

.dt-p-20 {
  padding: 20px;
}

.dt-pt-20 {
  padding-top: 20px;
}

.dt-pb-20 {
  padding-bottom: 20px;
}

.dt-pl-20 {
  padding-left: 20px;
}

.dt-pr-20 {
  padding-right: 20px;
}

.dt-px-20 {
  padding-left: 20px;
  padding-right: 20px;
}

.dt-py-20 {
  padding-top: 20px;
  padding-bottom: 20px;
}

.dt-p-25 {
  padding: 25px;
}

.dt-pt-25 {
  padding-top: 25px;
}

.dt-pb-25 {
  padding-bottom: 25px;
}

.dt-pl-25 {
  padding-left: 25px;
}

.dt-pr-25 {
  padding-right: 25px;
}

.dt-px-25 {
  padding-left: 25px;
  padding-right: 25px;
}

.dt-py-25 {
  padding-top: 25px;
  padding-bottom: 25px;
}

.dt-p-30 {
  padding: 30px;
}

.dt-pt-30 {
  padding-top: 30px;
}

.dt-pb-30 {
  padding-bottom: 30px;
}

.dt-pl-30 {
  padding-left: 30px;
}

.dt-pr-30 {
  padding-right: 30px;
}

.dt-px-30 {
  padding-left: 30px;
  padding-right: 30px;
}

.dt-py-30 {
  padding-top: 30px;
  padding-bottom: 30px;
}

.dt-p-35 {
  padding: 35px;
}

.dt-pt-35 {
  padding-top: 35px;
}

.dt-pb-35 {
  padding-bottom: 35px;
}

.dt-pl-35 {
  padding-left: 35px;
}

.dt-pr-35 {
  padding-right: 35px;
}

.dt-px-35 {
  padding-left: 35px;
  padding-right: 35px;
}

.dt-py-35 {
  padding-top: 35px;
  padding-bottom: 35px;
}

.dt-p-40 {
  padding: 40px;
}

.dt-pt-40 {
  padding-top: 40px;
}

.dt-pb-40 {
  padding-bottom: 40px;
}

.dt-pl-40 {
  padding-left: 40px;
}

.dt-pr-40 {
  padding-right: 40px;
}

.dt-px-40 {
  padding-left: 40px;
  padding-right: 40px;
}

.dt-py-40 {
  padding-top: 40px;
  padding-bottom: 40px;
}

.dt-p-45 {
  padding: 45px;
}

.dt-pt-45 {
  padding-top: 45px;
}

.dt-pb-45 {
  padding-bottom: 45px;
}

.dt-pl-45 {
  padding-left: 45px;
}

.dt-pr-45 {
  padding-right: 45px;
}

.dt-px-45 {
  padding-left: 45px;
  padding-right: 45px;
}

.dt-py-45 {
  padding-top: 45px;
  padding-bottom: 45px;
}

.dt-p-50 {
  padding: 50px;
}

.dt-pt-50 {
  padding-top: 50px;
}

.dt-pb-50 {
  padding-bottom: 50px;
}

.dt-pl-50 {
  padding-left: 50px;
}

.dt-pr-50 {
  padding-right: 50px;
}

.dt-px-50 {
  padding-left: 50px;
  padding-right: 50px;
}

.dt-py-50 {
  padding-top: 50px;
  padding-bottom: 50px;
}

.dt-p-55 {
  padding: 55px;
}

.dt-pt-55 {
  padding-top: 55px;
}

.dt-pb-55 {
  padding-bottom: 55px;
}

.dt-pl-55 {
  padding-left: 55px;
}

.dt-pr-55 {
  padding-right: 55px;
}

.dt-px-55 {
  padding-left: 55px;
  padding-right: 55px;
}

.dt-py-55 {
  padding-top: 55px;
  padding-bottom: 55px;
}

.dt-p-60 {
  padding: 60px;
}

.dt-pt-60 {
  padding-top: 60px;
}

.dt-pb-60 {
  padding-bottom: 60px;
}

.dt-pl-60 {
  padding-left: 60px;
}

.dt-pr-60 {
  padding-right: 60px;
}

.dt-px-60 {
  padding-left: 60px;
  padding-right: 60px;
}

.dt-py-60 {
  padding-top: 60px;
  padding-bottom: 60px;
}

.dt-p-65 {
  padding: 65px;
}

.dt-pt-65 {
  padding-top: 65px;
}

.dt-pb-65 {
  padding-bottom: 65px;
}

.dt-pl-65 {
  padding-left: 65px;
}

.dt-pr-65 {
  padding-right: 65px;
}

.dt-px-65 {
  padding-left: 65px;
  padding-right: 65px;
}

.dt-py-65 {
  padding-top: 65px;
  padding-bottom: 65px;
}

.dt-p-70 {
  padding: 70px;
}

.dt-pt-70 {
  padding-top: 70px;
}

.dt-pb-70 {
  padding-bottom: 70px;
}

.dt-pl-70 {
  padding-left: 70px;
}

.dt-pr-70 {
  padding-right: 70px;
}

.dt-px-70 {
  padding-left: 70px;
  padding-right: 70px;
}

.dt-py-70 {
  padding-top: 70px;
  padding-bottom: 70px;
}

.dt-p-75 {
  padding: 75px;
}

.dt-pt-75 {
  padding-top: 75px;
}

.dt-pb-75 {
  padding-bottom: 75px;
}

.dt-pl-75 {
  padding-left: 75px;
}

.dt-pr-75 {
  padding-right: 75px;
}

.dt-px-75 {
  padding-left: 75px;
  padding-right: 75px;
}

.dt-py-75 {
  padding-top: 75px;
  padding-bottom: 75px;
}

.dt-p-80 {
  padding: 80px;
}

.dt-pt-80 {
  padding-top: 80px;
}

.dt-pb-80 {
  padding-bottom: 80px;
}

.dt-pl-80 {
  padding-left: 80px;
}

.dt-pr-80 {
  padding-right: 80px;
}

.dt-px-80 {
  padding-left: 80px;
  padding-right: 80px;
}

.dt-py-80 {
  padding-top: 80px;
  padding-bottom: 80px;
}

.dt-p-85 {
  padding: 85px;
}

.dt-pt-85 {
  padding-top: 85px;
}

.dt-pb-85 {
  padding-bottom: 85px;
}

.dt-pl-85 {
  padding-left: 85px;
}

.dt-pr-85 {
  padding-right: 85px;
}

.dt-px-85 {
  padding-left: 85px;
  padding-right: 85px;
}

.dt-py-85 {
  padding-top: 85px;
  padding-bottom: 85px;
}

.dt-p-90 {
  padding: 90px;
}

.dt-pt-90 {
  padding-top: 90px;
}

.dt-pb-90 {
  padding-bottom: 90px;
}

.dt-pl-90 {
  padding-left: 90px;
}

.dt-pr-90 {
  padding-right: 90px;
}

.dt-px-90 {
  padding-left: 90px;
  padding-right: 90px;
}

.dt-py-90 {
  padding-top: 90px;
  padding-bottom: 90px;
}

.dt-p-95 {
  padding: 95px;
}

.dt-pt-95 {
  padding-top: 95px;
}

.dt-pb-95 {
  padding-bottom: 95px;
}

.dt-pl-95 {
  padding-left: 95px;
}

.dt-pr-95 {
  padding-right: 95px;
}

.dt-px-95 {
  padding-left: 95px;
  padding-right: 95px;
}

.dt-py-95 {
  padding-top: 95px;
  padding-bottom: 95px;
}

.dt-p-100 {
  padding: 100px;
}

.dt-pt-100 {
  padding-top: 100px;
}

.dt-pb-100 {
  padding-bottom: 100px;
}

.dt-pl-100 {
  padding-left: 100px;
}

.dt-pr-100 {
  padding-right: 100px;
}

.dt-px-100 {
  padding-left: 100px;
  padding-right: 100px;
}

.dt-py-100 {
  padding-top: 100px;
  padding-bottom: 100px;
}

@media (max-width: 991px) {
  .tab-p-0 {
    padding: 0px !important;
  }

  .tab-pt-0 {
    padding-top: 0px !important;
  }

  .tab-pb-0 {
    padding-bottom: 0px !important;
  }

  .tab-pl-0 {
    padding-left: 0px !important;
  }

  .tab-pr-0 {
    padding-right: 0px !important;
  }

  .tab-px-0 {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }

  .tab-py-0 {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }

  .tab-p-5 {
    padding: 5px !important;
  }

  .tab-pt-5 {
    padding-top: 5px !important;
  }

  .tab-pb-5 {
    padding-bottom: 5px !important;
  }

  .tab-pl-5 {
    padding-left: 5px !important;
  }

  .tab-pr-5 {
    padding-right: 5px !important;
  }

  .tab-px-5 {
    padding-left: 5px !important;
    padding-right: 5px !important;
  }

  .tab-py-5 {
    padding-top: 5px !important;
    padding-bottom: 5px !important;
  }

  .tab-p-10 {
    padding: 10px !important;
  }

  .tab-pt-10 {
    padding-top: 10px !important;
  }

  .tab-pb-10 {
    padding-bottom: 10px !important;
  }

  .tab-pl-10 {
    padding-left: 10px !important;
  }

  .tab-pr-10 {
    padding-right: 10px !important;
  }

  .tab-px-10 {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }

  .tab-py-10 {
    padding-top: 10px !important;
    padding-bottom: 10px !important;
  }

  .tab-p-15 {
    padding: 15px !important;
  }

  .tab-pt-15 {
    padding-top: 15px !important;
  }

  .tab-pb-15 {
    padding-bottom: 15px !important;
  }

  .tab-pl-15 {
    padding-left: 15px !important;
  }

  .tab-pr-15 {
    padding-right: 15px !important;
  }

  .tab-px-15 {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }

  .tab-py-15 {
    padding-top: 15px !important;
    padding-bottom: 15px !important;
  }

  .tab-p-20 {
    padding: 20px !important;
  }

  .tab-pt-20 {
    padding-top: 20px !important;
  }

  .tab-pb-20 {
    padding-bottom: 20px !important;
  }

  .tab-pl-20 {
    padding-left: 20px !important;
  }

  .tab-pr-20 {
    padding-right: 20px !important;
  }

  .tab-px-20 {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }

  .tab-py-20 {
    padding-top: 20px !important;
    padding-bottom: 20px !important;
  }

  .tab-p-25 {
    padding: 25px !important;
  }

  .tab-pt-25 {
    padding-top: 25px !important;
  }

  .tab-pb-25 {
    padding-bottom: 25px !important;
  }

  .tab-pl-25 {
    padding-left: 25px !important;
  }

  .tab-pr-25 {
    padding-right: 25px !important;
  }

  .tab-px-25 {
    padding-left: 25px !important;
    padding-right: 25px !important;
  }

  .tab-py-25 {
    padding-top: 25px !important;
    padding-bottom: 25px !important;
  }

  .tab-p-30 {
    padding: 30px !important;
  }

  .tab-pt-30 {
    padding-top: 30px !important;
  }

  .tab-pb-30 {
    padding-bottom: 30px !important;
  }

  .tab-pl-30 {
    padding-left: 30px !important;
  }

  .tab-pr-30 {
    padding-right: 30px !important;
  }

  .tab-px-30 {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }

  .tab-py-30 {
    padding-top: 30px !important;
    padding-bottom: 30px !important;
  }

  .tab-p-35 {
    padding: 35px !important;
  }

  .tab-pt-35 {
    padding-top: 35px !important;
  }

  .tab-pb-35 {
    padding-bottom: 35px !important;
  }

  .tab-pl-35 {
    padding-left: 35px !important;
  }

  .tab-pr-35 {
    padding-right: 35px !important;
  }

  .tab-px-35 {
    padding-left: 35px !important;
    padding-right: 35px !important;
  }

  .tab-py-35 {
    padding-top: 35px !important;
    padding-bottom: 35px !important;
  }

  .tab-p-40 {
    padding: 40px !important;
  }

  .tab-pt-40 {
    padding-top: 40px !important;
  }

  .tab-pb-40 {
    padding-bottom: 40px !important;
  }

  .tab-pl-40 {
    padding-left: 40px !important;
  }

  .tab-pr-40 {
    padding-right: 40px !important;
  }

  .tab-px-40 {
    padding-left: 40px !important;
    padding-right: 40px !important;
  }

  .tab-py-40 {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }

  .tab-p-45 {
    padding: 45px !important;
  }

  .tab-pt-45 {
    padding-top: 45px !important;
  }

  .tab-pb-45 {
    padding-bottom: 45px !important;
  }

  .tab-pl-45 {
    padding-left: 45px !important;
  }

  .tab-pr-45 {
    padding-right: 45px !important;
  }

  .tab-px-45 {
    padding-left: 45px !important;
    padding-right: 45px !important;
  }

  .tab-py-45 {
    padding-top: 45px !important;
    padding-bottom: 45px !important;
  }

  .tab-p-50 {
    padding: 50px !important;
  }

  .tab-pt-50 {
    padding-top: 50px !important;
  }

  .tab-pb-50 {
    padding-bottom: 50px !important;
  }

  .tab-pl-50 {
    padding-left: 50px !important;
  }

  .tab-pr-50 {
    padding-right: 50px !important;
  }

  .tab-px-50 {
    padding-left: 50px !important;
    padding-right: 50px !important;
  }

  .tab-py-50 {
    padding-top: 50px !important;
    padding-bottom: 50px !important;
  }

  .tab-p-55 {
    padding: 55px !important;
  }

  .tab-pt-55 {
    padding-top: 55px !important;
  }

  .tab-pb-55 {
    padding-bottom: 55px !important;
  }

  .tab-pl-55 {
    padding-left: 55px !important;
  }

  .tab-pr-55 {
    padding-right: 55px !important;
  }

  .tab-px-55 {
    padding-left: 55px !important;
    padding-right: 55px !important;
  }

  .tab-py-55 {
    padding-top: 55px !important;
    padding-bottom: 55px !important;
  }

  .tab-p-60 {
    padding: 60px !important;
  }

  .tab-pt-60 {
    padding-top: 60px !important;
  }

  .tab-pb-60 {
    padding-bottom: 60px !important;
  }

  .tab-pl-60 {
    padding-left: 60px !important;
  }

  .tab-pr-60 {
    padding-right: 60px !important;
  }

  .tab-px-60 {
    padding-left: 60px !important;
    padding-right: 60px !important;
  }

  .tab-py-60 {
    padding-top: 60px !important;
    padding-bottom: 60px !important;
  }

  .tab-p-65 {
    padding: 65px !important;
  }

  .tab-pt-65 {
    padding-top: 65px !important;
  }

  .tab-pb-65 {
    padding-bottom: 65px !important;
  }

  .tab-pl-65 {
    padding-left: 65px !important;
  }

  .tab-pr-65 {
    padding-right: 65px !important;
  }

  .tab-px-65 {
    padding-left: 65px !important;
    padding-right: 65px !important;
  }

  .tab-py-65 {
    padding-top: 65px !important;
    padding-bottom: 65px !important;
  }

  .tab-p-70 {
    padding: 70px !important;
  }

  .tab-pt-70 {
    padding-top: 70px !important;
  }

  .tab-pb-70 {
    padding-bottom: 70px !important;
  }

  .tab-pl-70 {
    padding-left: 70px !important;
  }

  .tab-pr-70 {
    padding-right: 70px !important;
  }

  .tab-px-70 {
    padding-left: 70px !important;
    padding-right: 70px !important;
  }

  .tab-py-70 {
    padding-top: 70px !important;
    padding-bottom: 70px !important;
  }

  .tab-p-75 {
    padding: 75px !important;
  }

  .tab-pt-75 {
    padding-top: 75px !important;
  }

  .tab-pb-75 {
    padding-bottom: 75px !important;
  }

  .tab-pl-75 {
    padding-left: 75px !important;
  }

  .tab-pr-75 {
    padding-right: 75px !important;
  }

  .tab-px-75 {
    padding-left: 75px !important;
    padding-right: 75px !important;
  }

  .tab-py-75 {
    padding-top: 75px !important;
    padding-bottom: 75px !important;
  }

  .tab-p-80 {
    padding: 80px !important;
  }

  .tab-pt-80 {
    padding-top: 80px !important;
  }

  .tab-pb-80 {
    padding-bottom: 80px !important;
  }

  .tab-pl-80 {
    padding-left: 80px !important;
  }

  .tab-pr-80 {
    padding-right: 80px !important;
  }

  .tab-px-80 {
    padding-left: 80px !important;
    padding-right: 80px !important;
  }

  .tab-py-80 {
    padding-top: 80px !important;
    padding-bottom: 80px !important;
  }

  .tab-p-85 {
    padding: 85px !important;
  }

  .tab-pt-85 {
    padding-top: 85px !important;
  }

  .tab-pb-85 {
    padding-bottom: 85px !important;
  }

  .tab-pl-85 {
    padding-left: 85px !important;
  }

  .tab-pr-85 {
    padding-right: 85px !important;
  }

  .tab-px-85 {
    padding-left: 85px !important;
    padding-right: 85px !important;
  }

  .tab-py-85 {
    padding-top: 85px !important;
    padding-bottom: 85px !important;
  }

  .tab-p-90 {
    padding: 90px !important;
  }

  .tab-pt-90 {
    padding-top: 90px !important;
  }

  .tab-pb-90 {
    padding-bottom: 90px !important;
  }

  .tab-pl-90 {
    padding-left: 90px !important;
  }

  .tab-pr-90 {
    padding-right: 90px !important;
  }

  .tab-px-90 {
    padding-left: 90px !important;
    padding-right: 90px !important;
  }

  .tab-py-90 {
    padding-top: 90px !important;
    padding-bottom: 90px !important;
  }

  .tab-p-95 {
    padding: 95px !important;
  }

  .tab-pt-95 {
    padding-top: 95px !important;
  }

  .tab-pb-95 {
    padding-bottom: 95px !important;
  }

  .tab-pl-95 {
    padding-left: 95px !important;
  }

  .tab-pr-95 {
    padding-right: 95px !important;
  }

  .tab-px-95 {
    padding-left: 95px !important;
    padding-right: 95px !important;
  }

  .tab-py-95 {
    padding-top: 95px !important;
    padding-bottom: 95px !important;
  }

  .tab-p-100 {
    padding: 100px !important;
  }

  .tab-pt-100 {
    padding-top: 100px !important;
  }

  .tab-pb-100 {
    padding-bottom: 100px !important;
  }

  .tab-pl-100 {
    padding-left: 100px !important;
  }

  .tab-pr-100 {
    padding-right: 100px !important;
  }

  .tab-px-100 {
    padding-left: 100px !important;
    padding-right: 100px !important;
  }

  .tab-py-100 {
    padding-top: 100px !important;
    padding-bottom: 100px !important;
  }
}

@media (max-width: 767px) {
  .mob-p-0 {
    padding: 0px !important;
  }

  .mob-pt-0 {
    padding-top: 0px !important;
  }

  .mob-pb-0 {
    padding-bottom: 0px !important;
  }

  .mob-pl-0 {
    padding-left: 0px !important;
  }

  .mob-pr-0 {
    padding-right: 0px !important;
  }

  .mob-px-0 {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }

  .mob-py-0 {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }

  .mob-p-5 {
    padding: 5px !important;
  }

  .mob-pt-5 {
    padding-top: 5px !important;
  }

  .mob-pb-5 {
    padding-bottom: 5px !important;
  }

  .mob-pl-5 {
    padding-left: 5px !important;
  }

  .mob-pr-5 {
    padding-right: 5px !important;
  }

  .mob-px-5 {
    padding-left: 5px !important;
    padding-right: 5px !important;
  }

  .mob-py-5 {
    padding-top: 5px !important;
    padding-bottom: 5px !important;
  }

  .mob-p-10 {
    padding: 10px !important;
  }

  .mob-pt-10 {
    padding-top: 10px !important;
  }

  .mob-pb-10 {
    padding-bottom: 10px !important;
  }

  .mob-pl-10 {
    padding-left: 10px !important;
  }

  .mob-pr-10 {
    padding-right: 10px !important;
  }

  .mob-px-10 {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }

  .mob-py-10 {
    padding-top: 10px !important;
    padding-bottom: 10px !important;
  }

  .mob-p-15 {
    padding: 15px !important;
  }

  .mob-pt-15 {
    padding-top: 15px !important;
  }

  .mob-pb-15 {
    padding-bottom: 15px !important;
  }

  .mob-pl-15 {
    padding-left: 15px !important;
  }

  .mob-pr-15 {
    padding-right: 15px !important;
  }

  .mob-px-15 {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }

  .mob-py-15 {
    padding-top: 15px !important;
    padding-bottom: 15px !important;
  }

  .mob-p-20 {
    padding: 20px !important;
  }

  .mob-pt-20 {
    padding-top: 20px !important;
  }

  .mob-pb-20 {
    padding-bottom: 20px !important;
  }

  .mob-pl-20 {
    padding-left: 20px !important;
  }

  .mob-pr-20 {
    padding-right: 20px !important;
  }

  .mob-px-20 {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }

  .mob-py-20 {
    padding-top: 20px !important;
    padding-bottom: 20px !important;
  }

  .mob-p-25 {
    padding: 25px !important;
  }

  .mob-pt-25 {
    padding-top: 25px !important;
  }

  .mob-pb-25 {
    padding-bottom: 25px !important;
  }

  .mob-pl-25 {
    padding-left: 25px !important;
  }

  .mob-pr-25 {
    padding-right: 25px !important;
  }

  .mob-px-25 {
    padding-left: 25px !important;
    padding-right: 25px !important;
  }

  .mob-py-25 {
    padding-top: 25px !important;
    padding-bottom: 25px !important;
  }

  .mob-p-30 {
    padding: 30px !important;
  }

  .mob-pt-30 {
    padding-top: 30px !important;
  }

  .mob-pb-30 {
    padding-bottom: 30px !important;
  }

  .mob-pl-30 {
    padding-left: 30px !important;
  }

  .mob-pr-30 {
    padding-right: 30px !important;
  }

  .mob-px-30 {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }

  .mob-py-30 {
    padding-top: 30px !important;
    padding-bottom: 30px !important;
  }

  .mob-p-35 {
    padding: 35px !important;
  }

  .mob-pt-35 {
    padding-top: 35px !important;
  }

  .mob-pb-35 {
    padding-bottom: 35px !important;
  }

  .mob-pl-35 {
    padding-left: 35px !important;
  }

  .mob-pr-35 {
    padding-right: 35px !important;
  }

  .mob-px-35 {
    padding-left: 35px !important;
    padding-right: 35px !important;
  }

  .mob-py-35 {
    padding-top: 35px !important;
    padding-bottom: 35px !important;
  }

  .mob-p-40 {
    padding: 40px !important;
  }

  .mob-pt-40 {
    padding-top: 40px !important;
  }

  .mob-pb-40 {
    padding-bottom: 40px !important;
  }

  .mob-pl-40 {
    padding-left: 40px !important;
  }

  .mob-pr-40 {
    padding-right: 40px !important;
  }

  .mob-px-40 {
    padding-left: 40px !important;
    padding-right: 40px !important;
  }

  .mob-py-40 {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }

  .mob-p-45 {
    padding: 45px !important;
  }

  .mob-pt-45 {
    padding-top: 45px !important;
  }

  .mob-pb-45 {
    padding-bottom: 45px !important;
  }

  .mob-pl-45 {
    padding-left: 45px !important;
  }

  .mob-pr-45 {
    padding-right: 45px !important;
  }

  .mob-px-45 {
    padding-left: 45px !important;
    padding-right: 45px !important;
  }

  .mob-py-45 {
    padding-top: 45px !important;
    padding-bottom: 45px !important;
  }

  .mob-p-50 {
    padding: 50px !important;
  }

  .mob-pt-50 {
    padding-top: 50px !important;
  }

  .mob-pb-50 {
    padding-bottom: 50px !important;
  }

  .mob-pl-50 {
    padding-left: 50px !important;
  }

  .mob-pr-50 {
    padding-right: 50px !important;
  }

  .mob-px-50 {
    padding-left: 50px !important;
    padding-right: 50px !important;
  }

  .mob-py-50 {
    padding-top: 50px !important;
    padding-bottom: 50px !important;
  }

  .mob-p-55 {
    padding: 55px !important;
  }

  .mob-pt-55 {
    padding-top: 55px !important;
  }

  .mob-pb-55 {
    padding-bottom: 55px !important;
  }

  .mob-pl-55 {
    padding-left: 55px !important;
  }

  .mob-pr-55 {
    padding-right: 55px !important;
  }

  .mob-px-55 {
    padding-left: 55px !important;
    padding-right: 55px !important;
  }

  .mob-py-55 {
    padding-top: 55px !important;
    padding-bottom: 55px !important;
  }

  .mob-p-60 {
    padding: 60px !important;
  }

  .mob-pt-60 {
    padding-top: 60px !important;
  }

  .mob-pb-60 {
    padding-bottom: 60px !important;
  }

  .mob-pl-60 {
    padding-left: 60px !important;
  }

  .mob-pr-60 {
    padding-right: 60px !important;
  }

  .mob-px-60 {
    padding-left: 60px !important;
    padding-right: 60px !important;
  }

  .mob-py-60 {
    padding-top: 60px !important;
    padding-bottom: 60px !important;
  }

  .mob-p-65 {
    padding: 65px !important;
  }

  .mob-pt-65 {
    padding-top: 65px !important;
  }

  .mob-pb-65 {
    padding-bottom: 65px !important;
  }

  .mob-pl-65 {
    padding-left: 65px !important;
  }

  .mob-pr-65 {
    padding-right: 65px !important;
  }

  .mob-px-65 {
    padding-left: 65px !important;
    padding-right: 65px !important;
  }

  .mob-py-65 {
    padding-top: 65px !important;
    padding-bottom: 65px !important;
  }

  .mob-p-70 {
    padding: 70px !important;
  }

  .mob-pt-70 {
    padding-top: 70px !important;
  }

  .mob-pb-70 {
    padding-bottom: 70px !important;
  }

  .mob-pl-70 {
    padding-left: 70px !important;
  }

  .mob-pr-70 {
    padding-right: 70px !important;
  }

  .mob-px-70 {
    padding-left: 70px !important;
    padding-right: 70px !important;
  }

  .mob-py-70 {
    padding-top: 70px !important;
    padding-bottom: 70px !important;
  }

  .mob-p-75 {
    padding: 75px !important;
  }

  .mob-pt-75 {
    padding-top: 75px !important;
  }

  .mob-pb-75 {
    padding-bottom: 75px !important;
  }

  .mob-pl-75 {
    padding-left: 75px !important;
  }

  .mob-pr-75 {
    padding-right: 75px !important;
  }

  .mob-px-75 {
    padding-left: 75px !important;
    padding-right: 75px !important;
  }

  .mob-py-75 {
    padding-top: 75px !important;
    padding-bottom: 75px !important;
  }

  .mob-p-80 {
    padding: 80px !important;
  }

  .mob-pt-80 {
    padding-top: 80px !important;
  }

  .mob-pb-80 {
    padding-bottom: 80px !important;
  }

  .mob-pl-80 {
    padding-left: 80px !important;
  }

  .mob-pr-80 {
    padding-right: 80px !important;
  }

  .mob-px-80 {
    padding-left: 80px !important;
    padding-right: 80px !important;
  }

  .mob-py-80 {
    padding-top: 80px !important;
    padding-bottom: 80px !important;
  }

  .mob-p-85 {
    padding: 85px !important;
  }

  .mob-pt-85 {
    padding-top: 85px !important;
  }

  .mob-pb-85 {
    padding-bottom: 85px !important;
  }

  .mob-pl-85 {
    padding-left: 85px !important;
  }

  .mob-pr-85 {
    padding-right: 85px !important;
  }

  .mob-px-85 {
    padding-left: 85px !important;
    padding-right: 85px !important;
  }

  .mob-py-85 {
    padding-top: 85px !important;
    padding-bottom: 85px !important;
  }

  .mob-p-90 {
    padding: 90px !important;
  }

  .mob-pt-90 {
    padding-top: 90px !important;
  }

  .mob-pb-90 {
    padding-bottom: 90px !important;
  }

  .mob-pl-90 {
    padding-left: 90px !important;
  }

  .mob-pr-90 {
    padding-right: 90px !important;
  }

  .mob-px-90 {
    padding-left: 90px !important;
    padding-right: 90px !important;
  }

  .mob-py-90 {
    padding-top: 90px !important;
    padding-bottom: 90px !important;
  }

  .mob-p-95 {
    padding: 95px !important;
  }

  .mob-pt-95 {
    padding-top: 95px !important;
  }

  .mob-pb-95 {
    padding-bottom: 95px !important;
  }

  .mob-pl-95 {
    padding-left: 95px !important;
  }

  .mob-pr-95 {
    padding-right: 95px !important;
  }

  .mob-px-95 {
    padding-left: 95px !important;
    padding-right: 95px !important;
  }

  .mob-py-95 {
    padding-top: 95px !important;
    padding-bottom: 95px !important;
  }

  .mob-p-100 {
    padding: 100px !important;
  }

  .mob-pt-100 {
    padding-top: 100px !important;
  }

  .mob-pb-100 {
    padding-bottom: 100px !important;
  }

  .mob-pl-100 {
    padding-left: 100px !important;
  }

  .mob-pr-100 {
    padding-right: 100px !important;
  }

  .mob-px-100 {
    padding-left: 100px !important;
    padding-right: 100px !important;
  }

  .mob-py-100 {
    padding-top: 100px !important;
    padding-bottom: 100px !important;
  }
}

.dt-m-0 {
  margin: 0px;
}

.dt-mt-0 {
  margin-top: 0px;
}

.dt-mb-0 {
  margin-bottom: 0px;
}

.dt-ml-0 {
  margin-left: 0px;
}

.dt-mr-0 {
  margin-right: 0px;
}

.dt-mx-0 {
  margin-left: 0px;
  margin-right: 0px;
}

.dt-my-0 {
  margin-top: 0px;
  margin-bottom: 0px;
}

.dt-m-5 {
  margin: 5px;
}

.dt-mt-5 {
  margin-top: 5px;
}

.dt-mb-5 {
  margin-bottom: 5px;
}

.dt-ml-5 {
  margin-left: 5px;
}

.dt-mr-5 {
  margin-right: 5px;
}

.dt-mx-5 {
  margin-left: 5px;
  margin-right: 5px;
}

.dt-my-5 {
  margin-top: 5px;
  margin-bottom: 5px;
}

.dt-m-10 {
  margin: 10px;
}

.dt-mt-10 {
  margin-top: 10px;
}

.dt-mb-10 {
  margin-bottom: 10px;
}

.dt-ml-10 {
  margin-left: 10px;
}

.dt-mr-10 {
  margin-right: 10px;
}

.dt-mx-10 {
  margin-left: 10px;
  margin-right: 10px;
}

.dt-my-10 {
  margin-top: 10px;
  margin-bottom: 10px;
}

.dt-m-15 {
  margin: 15px;
}

.dt-mt-15 {
  margin-top: 15px;
}

.dt-mb-15 {
  margin-bottom: 15px;
}

.dt-ml-15 {
  margin-left: 15px;
}

.dt-mr-15 {
  margin-right: 15px;
}

.dt-mx-15 {
  margin-left: 15px;
  margin-right: 15px;
}

.dt-my-15 {
  margin-top: 15px;
  margin-bottom: 15px;
}

.dt-m-20 {
  margin: 20px;
}

.dt-mt-20 {
  margin-top: 20px;
}

.dt-mb-20 {
  margin-bottom: 20px;
}

.dt-ml-20 {
  margin-left: 20px;
}

.dt-mr-20 {
  margin-right: 20px;
}

.dt-mx-20 {
  margin-left: 20px;
  margin-right: 20px;
}

.dt-my-20 {
  margin-top: 20px;
  margin-bottom: 20px;
}

.dt-m-25 {
  margin: 25px;
}

.dt-mt-25 {
  margin-top: 25px;
}

.dt-mb-25 {
  margin-bottom: 25px;
}

.dt-ml-25 {
  margin-left: 25px;
}

.dt-mr-25 {
  margin-right: 25px;
}

.dt-mx-25 {
  margin-left: 25px;
  margin-right: 25px;
}

.dt-my-25 {
  margin-top: 25px;
  margin-bottom: 25px;
}

.dt-m-30 {
  margin: 30px;
}

.dt-mt-30 {
  margin-top: 30px;
}

.dt-mb-30 {
  margin-bottom: 30px;
}

.dt-ml-30 {
  margin-left: 30px;
}

.dt-mr-30 {
  margin-right: 30px;
}

.dt-mx-30 {
  margin-left: 30px;
  margin-right: 30px;
}

.dt-my-30 {
  margin-top: 30px;
  margin-bottom: 30px;
}

.dt-m-35 {
  margin: 35px;
}

.dt-mt-35 {
  margin-top: 35px;
}

.dt-mb-35 {
  margin-bottom: 35px;
}

.dt-ml-35 {
  margin-left: 35px;
}

.dt-mr-35 {
  margin-right: 35px;
}

.dt-mx-35 {
  margin-left: 35px;
  margin-right: 35px;
}

.dt-my-35 {
  margin-top: 35px;
  margin-bottom: 35px;
}

.dt-m-40 {
  margin: 40px;
}

.dt-mt-40 {
  margin-top: 40px;
}

.dt-mb-40 {
  margin-bottom: 40px;
}

.dt-ml-40 {
  margin-left: 40px;
}

.dt-mr-40 {
  margin-right: 40px;
}

.dt-mx-40 {
  margin-left: 40px;
  margin-right: 40px;
}

.dt-my-40 {
  margin-top: 40px;
  margin-bottom: 40px;
}

.dt-m-45 {
  margin: 45px;
}

.dt-mt-45 {
  margin-top: 45px;
}

.dt-mb-45 {
  margin-bottom: 45px;
}

.dt-ml-45 {
  margin-left: 45px;
}

.dt-mr-45 {
  margin-right: 45px;
}

.dt-mx-45 {
  margin-left: 45px;
  margin-right: 45px;
}

.dt-my-45 {
  margin-top: 45px;
  margin-bottom: 45px;
}

.dt-m-50 {
  margin: 50px;
}

.dt-mt-50 {
  margin-top: 50px;
}

.dt-mb-50 {
  margin-bottom: 50px;
}

.dt-ml-50 {
  margin-left: 50px;
}

.dt-mr-50 {
  margin-right: 50px;
}

.dt-mx-50 {
  margin-left: 50px;
  margin-right: 50px;
}

.dt-my-50 {
  margin-top: 50px;
  margin-bottom: 50px;
}

.dt-m-55 {
  margin: 55px;
}

.dt-mt-55 {
  margin-top: 55px;
}

.dt-mb-55 {
  margin-bottom: 55px;
}

.dt-ml-55 {
  margin-left: 55px;
}

.dt-mr-55 {
  margin-right: 55px;
}

.dt-mx-55 {
  margin-left: 55px;
  margin-right: 55px;
}

.dt-my-55 {
  margin-top: 55px;
  margin-bottom: 55px;
}

.dt-m-60 {
  margin: 60px;
}

.dt-mt-60 {
  margin-top: 60px;
}

.dt-mb-60 {
  margin-bottom: 60px;
}

.dt-ml-60 {
  margin-left: 60px;
}

.dt-mr-60 {
  margin-right: 60px;
}

.dt-mx-60 {
  margin-left: 60px;
  margin-right: 60px;
}

.dt-my-60 {
  margin-top: 60px;
  margin-bottom: 60px;
}

.dt-m-65 {
  margin: 65px;
}

.dt-mt-65 {
  margin-top: 65px;
}

.dt-mb-65 {
  margin-bottom: 65px;
}

.dt-ml-65 {
  margin-left: 65px;
}

.dt-mr-65 {
  margin-right: 65px;
}

.dt-mx-65 {
  margin-left: 65px;
  margin-right: 65px;
}

.dt-my-65 {
  margin-top: 65px;
  margin-bottom: 65px;
}

.dt-m-70 {
  margin: 70px;
}

.dt-mt-70 {
  margin-top: 70px;
}

.dt-mb-70 {
  margin-bottom: 70px;
}

.dt-ml-70 {
  margin-left: 70px;
}

.dt-mr-70 {
  margin-right: 70px;
}

.dt-mx-70 {
  margin-left: 70px;
  margin-right: 70px;
}

.dt-my-70 {
  margin-top: 70px;
  margin-bottom: 70px;
}

.dt-m-75 {
  margin: 75px;
}

.dt-mt-75 {
  margin-top: 75px;
}

.dt-mb-75 {
  margin-bottom: 75px;
}

.dt-ml-75 {
  margin-left: 75px;
}

.dt-mr-75 {
  margin-right: 75px;
}

.dt-mx-75 {
  margin-left: 75px;
  margin-right: 75px;
}

.dt-my-75 {
  margin-top: 75px;
  margin-bottom: 75px;
}

.dt-m-80 {
  margin: 80px;
}

.dt-mt-80 {
  margin-top: 80px;
}

.dt-mb-80 {
  margin-bottom: 80px;
}

.dt-ml-80 {
  margin-left: 80px;
}

.dt-mr-80 {
  margin-right: 80px;
}

.dt-mx-80 {
  margin-left: 80px;
  margin-right: 80px;
}

.dt-my-80 {
  margin-top: 80px;
  margin-bottom: 80px;
}

.dt-m-85 {
  margin: 85px;
}

.dt-mt-85 {
  margin-top: 85px;
}

.dt-mb-85 {
  margin-bottom: 85px;
}

.dt-ml-85 {
  margin-left: 85px;
}

.dt-mr-85 {
  margin-right: 85px;
}

.dt-mx-85 {
  margin-left: 85px;
  margin-right: 85px;
}

.dt-my-85 {
  margin-top: 85px;
  margin-bottom: 85px;
}

.dt-m-90 {
  margin: 90px;
}

.dt-mt-90 {
  margin-top: 90px;
}

.dt-mb-90 {
  margin-bottom: 90px;
}

.dt-ml-90 {
  margin-left: 90px;
}

.dt-mr-90 {
  margin-right: 90px;
}

.dt-mx-90 {
  margin-left: 90px;
  margin-right: 90px;
}

.dt-my-90 {
  margin-top: 90px;
  margin-bottom: 90px;
}

.dt-m-95 {
  margin: 95px;
}

.dt-mt-95 {
  margin-top: 95px;
}

.dt-mb-95 {
  margin-bottom: 95px;
}

.dt-ml-95 {
  margin-left: 95px;
}

.dt-mr-95 {
  margin-right: 95px;
}

.dt-mx-95 {
  margin-left: 95px;
  margin-right: 95px;
}

.dt-my-95 {
  margin-top: 95px;
  margin-bottom: 95px;
}

.dt-m-100 {
  margin: 100px;
}

.dt-mt-100 {
  margin-top: 100px;
}

.dt-mb-100 {
  margin-bottom: 100px;
}

.dt-ml-100 {
  margin-left: 100px;
}

.dt-mr-100 {
  margin-right: 100px;
}

.dt-mx-100 {
  margin-left: 100px;
  margin-right: 100px;
}

.dt-my-100 {
  margin-top: 100px;
  margin-bottom: 100px;
}

@media (max-width: 991px) {
  .tab-m-0 {
    margin: 0px !important;
  }

  .tab-mt-0 {
    margin-top: 0px !important;
  }

  .tab-mb-0 {
    margin-bottom: 0px !important;
  }

  .tab-ml-0 {
    margin-left: 0px !important;
  }

  .tab-mr-0 {
    margin-right: 0px !important;
  }

  .tab-mx-0 {
    margin-left: 0px !important;
    margin-right: 0px !important;
  }

  .tab-my-0 {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }

  .tab-m-5 {
    margin: 5px !important;
  }

  .tab-mt-5 {
    margin-top: 5px !important;
  }

  .tab-mb-5 {
    margin-bottom: 5px !important;
  }

  .tab-ml-5 {
    margin-left: 5px !important;
  }

  .tab-mr-5 {
    margin-right: 5px !important;
  }

  .tab-mx-5 {
    margin-left: 5px !important;
    margin-right: 5px !important;
  }

  .tab-my-5 {
    margin-top: 5px !important;
    margin-bottom: 5px !important;
  }

  .tab-m-10 {
    margin: 10px !important;
  }

  .tab-mt-10 {
    margin-top: 10px !important;
  }

  .tab-mb-10 {
    margin-bottom: 10px !important;
  }

  .tab-ml-10 {
    margin-left: 10px !important;
  }

  .tab-mr-10 {
    margin-right: 10px !important;
  }

  .tab-mx-10 {
    margin-left: 10px !important;
    margin-right: 10px !important;
  }

  .tab-my-10 {
    margin-top: 10px !important;
    margin-bottom: 10px !important;
  }

  .tab-m-15 {
    margin: 15px !important;
  }

  .tab-mt-15 {
    margin-top: 15px !important;
  }

  .tab-mb-15 {
    margin-bottom: 15px !important;
  }

  .tab-ml-15 {
    margin-left: 15px !important;
  }

  .tab-mr-15 {
    margin-right: 15px !important;
  }

  .tab-mx-15 {
    margin-left: 15px !important;
    margin-right: 15px !important;
  }

  .tab-my-15 {
    margin-top: 15px !important;
    margin-bottom: 15px !important;
  }

  .tab-m-20 {
    margin: 20px !important;
  }

  .tab-mt-20 {
    margin-top: 20px !important;
  }

  .tab-mb-20 {
    margin-bottom: 20px !important;
  }

  .tab-ml-20 {
    margin-left: 20px !important;
  }

  .tab-mr-20 {
    margin-right: 20px !important;
  }

  .tab-mx-20 {
    margin-left: 20px !important;
    margin-right: 20px !important;
  }

  .tab-my-20 {
    margin-top: 20px !important;
    margin-bottom: 20px !important;
  }

  .tab-m-25 {
    margin: 25px !important;
  }

  .tab-mt-25 {
    margin-top: 25px !important;
  }

  .tab-mb-25 {
    margin-bottom: 25px !important;
  }

  .tab-ml-25 {
    margin-left: 25px !important;
  }

  .tab-mr-25 {
    margin-right: 25px !important;
  }

  .tab-mx-25 {
    margin-left: 25px !important;
    margin-right: 25px !important;
  }

  .tab-my-25 {
    margin-top: 25px !important;
    margin-bottom: 25px !important;
  }

  .tab-m-30 {
    margin: 30px !important;
  }

  .tab-mt-30 {
    margin-top: 30px !important;
  }

  .tab-mb-30 {
    margin-bottom: 30px !important;
  }

  .tab-ml-30 {
    margin-left: 30px !important;
  }

  .tab-mr-30 {
    margin-right: 30px !important;
  }

  .tab-mx-30 {
    margin-left: 30px !important;
    margin-right: 30px !important;
  }

  .tab-my-30 {
    margin-top: 30px !important;
    margin-bottom: 30px !important;
  }

  .tab-m-35 {
    margin: 35px !important;
  }

  .tab-mt-35 {
    margin-top: 35px !important;
  }

  .tab-mb-35 {
    margin-bottom: 35px !important;
  }

  .tab-ml-35 {
    margin-left: 35px !important;
  }

  .tab-mr-35 {
    margin-right: 35px !important;
  }

  .tab-mx-35 {
    margin-left: 35px !important;
    margin-right: 35px !important;
  }

  .tab-my-35 {
    margin-top: 35px !important;
    margin-bottom: 35px !important;
  }

  .tab-m-40 {
    margin: 40px !important;
  }

  .tab-mt-40 {
    margin-top: 40px !important;
  }

  .tab-mb-40 {
    margin-bottom: 40px !important;
  }

  .tab-ml-40 {
    margin-left: 40px !important;
  }

  .tab-mr-40 {
    margin-right: 40px !important;
  }

  .tab-mx-40 {
    margin-left: 40px !important;
    margin-right: 40px !important;
  }

  .tab-my-40 {
    margin-top: 40px !important;
    margin-bottom: 40px !important;
  }

  .tab-m-45 {
    margin: 45px !important;
  }

  .tab-mt-45 {
    margin-top: 45px !important;
  }

  .tab-mb-45 {
    margin-bottom: 45px !important;
  }

  .tab-ml-45 {
    margin-left: 45px !important;
  }

  .tab-mr-45 {
    margin-right: 45px !important;
  }

  .tab-mx-45 {
    margin-left: 45px !important;
    margin-right: 45px !important;
  }

  .tab-my-45 {
    margin-top: 45px !important;
    margin-bottom: 45px !important;
  }

  .tab-m-50 {
    margin: 50px !important;
  }

  .tab-mt-50 {
    margin-top: 50px !important;
  }

  .tab-mb-50 {
    margin-bottom: 50px !important;
  }

  .tab-ml-50 {
    margin-left: 50px !important;
  }

  .tab-mr-50 {
    margin-right: 50px !important;
  }

  .tab-mx-50 {
    margin-left: 50px !important;
    margin-right: 50px !important;
  }

  .tab-my-50 {
    margin-top: 50px !important;
    margin-bottom: 50px !important;
  }

  .tab-m-55 {
    margin: 55px !important;
  }

  .tab-mt-55 {
    margin-top: 55px !important;
  }

  .tab-mb-55 {
    margin-bottom: 55px !important;
  }

  .tab-ml-55 {
    margin-left: 55px !important;
  }

  .tab-mr-55 {
    margin-right: 55px !important;
  }

  .tab-mx-55 {
    margin-left: 55px !important;
    margin-right: 55px !important;
  }

  .tab-my-55 {
    margin-top: 55px !important;
    margin-bottom: 55px !important;
  }

  .tab-m-60 {
    margin: 60px !important;
  }

  .tab-mt-60 {
    margin-top: 60px !important;
  }

  .tab-mb-60 {
    margin-bottom: 60px !important;
  }

  .tab-ml-60 {
    margin-left: 60px !important;
  }

  .tab-mr-60 {
    margin-right: 60px !important;
  }

  .tab-mx-60 {
    margin-left: 60px !important;
    margin-right: 60px !important;
  }

  .tab-my-60 {
    margin-top: 60px !important;
    margin-bottom: 60px !important;
  }

  .tab-m-65 {
    margin: 65px !important;
  }

  .tab-mt-65 {
    margin-top: 65px !important;
  }

  .tab-mb-65 {
    margin-bottom: 65px !important;
  }

  .tab-ml-65 {
    margin-left: 65px !important;
  }

  .tab-mr-65 {
    margin-right: 65px !important;
  }

  .tab-mx-65 {
    margin-left: 65px !important;
    margin-right: 65px !important;
  }

  .tab-my-65 {
    margin-top: 65px !important;
    margin-bottom: 65px !important;
  }

  .tab-m-70 {
    margin: 70px !important;
  }

  .tab-mt-70 {
    margin-top: 70px !important;
  }

  .tab-mb-70 {
    margin-bottom: 70px !important;
  }

  .tab-ml-70 {
    margin-left: 70px !important;
  }

  .tab-mr-70 {
    margin-right: 70px !important;
  }

  .tab-mx-70 {
    margin-left: 70px !important;
    margin-right: 70px !important;
  }

  .tab-my-70 {
    margin-top: 70px !important;
    margin-bottom: 70px !important;
  }

  .tab-m-75 {
    margin: 75px !important;
  }

  .tab-mt-75 {
    margin-top: 75px !important;
  }

  .tab-mb-75 {
    margin-bottom: 75px !important;
  }

  .tab-ml-75 {
    margin-left: 75px !important;
  }

  .tab-mr-75 {
    margin-right: 75px !important;
  }

  .tab-mx-75 {
    margin-left: 75px !important;
    margin-right: 75px !important;
  }

  .tab-my-75 {
    margin-top: 75px !important;
    margin-bottom: 75px !important;
  }

  .tab-m-80 {
    margin: 80px !important;
  }

  .tab-mt-80 {
    margin-top: 80px !important;
  }

  .tab-mb-80 {
    margin-bottom: 80px !important;
  }

  .tab-ml-80 {
    margin-left: 80px !important;
  }

  .tab-mr-80 {
    margin-right: 80px !important;
  }

  .tab-mx-80 {
    margin-left: 80px !important;
    margin-right: 80px !important;
  }

  .tab-my-80 {
    margin-top: 80px !important;
    margin-bottom: 80px !important;
  }

  .tab-m-85 {
    margin: 85px !important;
  }

  .tab-mt-85 {
    margin-top: 85px !important;
  }

  .tab-mb-85 {
    margin-bottom: 85px !important;
  }

  .tab-ml-85 {
    margin-left: 85px !important;
  }

  .tab-mr-85 {
    margin-right: 85px !important;
  }

  .tab-mx-85 {
    margin-left: 85px !important;
    margin-right: 85px !important;
  }

  .tab-my-85 {
    margin-top: 85px !important;
    margin-bottom: 85px !important;
  }

  .tab-m-90 {
    margin: 90px !important;
  }

  .tab-mt-90 {
    margin-top: 90px !important;
  }

  .tab-mb-90 {
    margin-bottom: 90px !important;
  }

  .tab-ml-90 {
    margin-left: 90px !important;
  }

  .tab-mr-90 {
    margin-right: 90px !important;
  }

  .tab-mx-90 {
    margin-left: 90px !important;
    margin-right: 90px !important;
  }

  .tab-my-90 {
    margin-top: 90px !important;
    margin-bottom: 90px !important;
  }

  .tab-m-95 {
    margin: 95px !important;
  }

  .tab-mt-95 {
    margin-top: 95px !important;
  }

  .tab-mb-95 {
    margin-bottom: 95px !important;
  }

  .tab-ml-95 {
    margin-left: 95px !important;
  }

  .tab-mr-95 {
    margin-right: 95px !important;
  }

  .tab-mx-95 {
    margin-left: 95px !important;
    margin-right: 95px !important;
  }

  .tab-my-95 {
    margin-top: 95px !important;
    margin-bottom: 95px !important;
  }

  .tab-m-100 {
    margin: 100px !important;
  }

  .tab-mt-100 {
    margin-top: 100px !important;
  }

  .tab-mb-100 {
    margin-bottom: 100px !important;
  }

  .tab-ml-100 {
    margin-left: 100px !important;
  }

  .tab-mr-100 {
    margin-right: 100px !important;
  }

  .tab-mx-100 {
    margin-left: 100px !important;
    margin-right: 100px !important;
  }

  .tab-my-100 {
    margin-top: 100px !important;
    margin-bottom: 100px !important;
  }
}

@media (max-width: 767px) {
  .mob-m-0 {
    margin: 0px !important;
  }

  .mob-mt-0 {
    margin-top: 0px !important;
  }

  .mob-mb-0 {
    margin-bottom: 0px !important;
  }

  .mob-ml-0 {
    margin-left: 0px !important;
  }

  .mob-mr-0 {
    margin-right: 0px !important;
  }

  .mob-mx-0 {
    margin-left: 0px !important;
    margin-right: 0px !important;
  }

  .mob-my-0 {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }

  .mob-m-5 {
    margin: 5px !important;
  }

  .mob-mt-5 {
    margin-top: 5px !important;
  }

  .mob-mb-5 {
    margin-bottom: 5px !important;
  }

  .mob-ml-5 {
    margin-left: 5px !important;
  }

  .mob-mr-5 {
    margin-right: 5px !important;
  }

  .mob-mx-5 {
    margin-left: 5px !important;
    margin-right: 5px !important;
  }

  .mob-my-5 {
    margin-top: 5px !important;
    margin-bottom: 5px !important;
  }

  .mob-m-10 {
    margin: 10px !important;
  }

  .mob-mt-10 {
    margin-top: 10px !important;
  }

  .mob-mb-10 {
    margin-bottom: 10px !important;
  }

  .mob-ml-10 {
    margin-left: 10px !important;
  }

  .mob-mr-10 {
    margin-right: 10px !important;
  }

  .mob-mx-10 {
    margin-left: 10px !important;
    margin-right: 10px !important;
  }

  .mob-my-10 {
    margin-top: 10px !important;
    margin-bottom: 10px !important;
  }

  .mob-m-15 {
    margin: 15px !important;
  }

  .mob-mt-15 {
    margin-top: 15px !important;
  }

  .mob-mb-15 {
    margin-bottom: 15px !important;
  }

  .mob-ml-15 {
    margin-left: 15px !important;
  }

  .mob-mr-15 {
    margin-right: 15px !important;
  }

  .mob-mx-15 {
    margin-left: 15px !important;
    margin-right: 15px !important;
  }

  .mob-my-15 {
    margin-top: 15px !important;
    margin-bottom: 15px !important;
  }

  .mob-m-20 {
    margin: 20px !important;
  }

  .mob-mt-20 {
    margin-top: 20px !important;
  }

  .mob-mb-20 {
    margin-bottom: 20px !important;
  }

  .mob-ml-20 {
    margin-left: 20px !important;
  }

  .mob-mr-20 {
    margin-right: 20px !important;
  }

  .mob-mx-20 {
    margin-left: 20px !important;
    margin-right: 20px !important;
  }

  .mob-my-20 {
    margin-top: 20px !important;
    margin-bottom: 20px !important;
  }

  .mob-m-25 {
    margin: 25px !important;
  }

  .mob-mt-25 {
    margin-top: 25px !important;
  }

  .mob-mb-25 {
    margin-bottom: 25px !important;
  }

  .mob-ml-25 {
    margin-left: 25px !important;
  }

  .mob-mr-25 {
    margin-right: 25px !important;
  }

  .mob-mx-25 {
    margin-left: 25px !important;
    margin-right: 25px !important;
  }

  .mob-my-25 {
    margin-top: 25px !important;
    margin-bottom: 25px !important;
  }

  .mob-m-30 {
    margin: 30px !important;
  }

  .mob-mt-30 {
    margin-top: 30px !important;
  }

  .mob-mb-30 {
    margin-bottom: 30px !important;
  }

  .mob-ml-30 {
    margin-left: 30px !important;
  }

  .mob-mr-30 {
    margin-right: 30px !important;
  }

  .mob-mx-30 {
    margin-left: 30px !important;
    margin-right: 30px !important;
  }

  .mob-my-30 {
    margin-top: 30px !important;
    margin-bottom: 30px !important;
  }

  .mob-m-35 {
    margin: 35px !important;
  }

  .mob-mt-35 {
    margin-top: 35px !important;
  }

  .mob-mb-35 {
    margin-bottom: 35px !important;
  }

  .mob-ml-35 {
    margin-left: 35px !important;
  }

  .mob-mr-35 {
    margin-right: 35px !important;
  }

  .mob-mx-35 {
    margin-left: 35px !important;
    margin-right: 35px !important;
  }

  .mob-my-35 {
    margin-top: 35px !important;
    margin-bottom: 35px !important;
  }

  .mob-m-40 {
    margin: 40px !important;
  }

  .mob-mt-40 {
    margin-top: 40px !important;
  }

  .mob-mb-40 {
    margin-bottom: 40px !important;
  }

  .mob-ml-40 {
    margin-left: 40px !important;
  }

  .mob-mr-40 {
    margin-right: 40px !important;
  }

  .mob-mx-40 {
    margin-left: 40px !important;
    margin-right: 40px !important;
  }

  .mob-my-40 {
    margin-top: 40px !important;
    margin-bottom: 40px !important;
  }

  .mob-m-45 {
    margin: 45px !important;
  }

  .mob-mt-45 {
    margin-top: 45px !important;
  }

  .mob-mb-45 {
    margin-bottom: 45px !important;
  }

  .mob-ml-45 {
    margin-left: 45px !important;
  }

  .mob-mr-45 {
    margin-right: 45px !important;
  }

  .mob-mx-45 {
    margin-left: 45px !important;
    margin-right: 45px !important;
  }

  .mob-my-45 {
    margin-top: 45px !important;
    margin-bottom: 45px !important;
  }

  .mob-m-50 {
    margin: 50px !important;
  }

  .mob-mt-50 {
    margin-top: 50px !important;
  }

  .mob-mb-50 {
    margin-bottom: 50px !important;
  }

  .mob-ml-50 {
    margin-left: 50px !important;
  }

  .mob-mr-50 {
    margin-right: 50px !important;
  }

  .mob-mx-50 {
    margin-left: 50px !important;
    margin-right: 50px !important;
  }

  .mob-my-50 {
    margin-top: 50px !important;
    margin-bottom: 50px !important;
  }

  .mob-m-55 {
    margin: 55px !important;
  }

  .mob-mt-55 {
    margin-top: 55px !important;
  }

  .mob-mb-55 {
    margin-bottom: 55px !important;
  }

  .mob-ml-55 {
    margin-left: 55px !important;
  }

  .mob-mr-55 {
    margin-right: 55px !important;
  }

  .mob-mx-55 {
    margin-left: 55px !important;
    margin-right: 55px !important;
  }

  .mob-my-55 {
    margin-top: 55px !important;
    margin-bottom: 55px !important;
  }

  .mob-m-60 {
    margin: 60px !important;
  }

  .mob-mt-60 {
    margin-top: 60px !important;
  }

  .mob-mb-60 {
    margin-bottom: 60px !important;
  }

  .mob-ml-60 {
    margin-left: 60px !important;
  }

  .mob-mr-60 {
    margin-right: 60px !important;
  }

  .mob-mx-60 {
    margin-left: 60px !important;
    margin-right: 60px !important;
  }

  .mob-my-60 {
    margin-top: 60px !important;
    margin-bottom: 60px !important;
  }

  .mob-m-65 {
    margin: 65px !important;
  }

  .mob-mt-65 {
    margin-top: 65px !important;
  }

  .mob-mb-65 {
    margin-bottom: 65px !important;
  }

  .mob-ml-65 {
    margin-left: 65px !important;
  }

  .mob-mr-65 {
    margin-right: 65px !important;
  }

  .mob-mx-65 {
    margin-left: 65px !important;
    margin-right: 65px !important;
  }

  .mob-my-65 {
    margin-top: 65px !important;
    margin-bottom: 65px !important;
  }

  .mob-m-70 {
    margin: 70px !important;
  }

  .mob-mt-70 {
    margin-top: 70px !important;
  }

  .mob-mb-70 {
    margin-bottom: 70px !important;
  }

  .mob-ml-70 {
    margin-left: 70px !important;
  }

  .mob-mr-70 {
    margin-right: 70px !important;
  }

  .mob-mx-70 {
    margin-left: 70px !important;
    margin-right: 70px !important;
  }

  .mob-my-70 {
    margin-top: 70px !important;
    margin-bottom: 70px !important;
  }

  .mob-m-75 {
    margin: 75px !important;
  }

  .mob-mt-75 {
    margin-top: 75px !important;
  }

  .mob-mb-75 {
    margin-bottom: 75px !important;
  }

  .mob-ml-75 {
    margin-left: 75px !important;
  }

  .mob-mr-75 {
    margin-right: 75px !important;
  }

  .mob-mx-75 {
    margin-left: 75px !important;
    margin-right: 75px !important;
  }

  .mob-my-75 {
    margin-top: 75px !important;
    margin-bottom: 75px !important;
  }

  .mob-m-80 {
    margin: 80px !important;
  }

  .mob-mt-80 {
    margin-top: 80px !important;
  }

  .mob-mb-80 {
    margin-bottom: 80px !important;
  }

  .mob-ml-80 {
    margin-left: 80px !important;
  }

  .mob-mr-80 {
    margin-right: 80px !important;
  }

  .mob-mx-80 {
    margin-left: 80px !important;
    margin-right: 80px !important;
  }

  .mob-my-80 {
    margin-top: 80px !important;
    margin-bottom: 80px !important;
  }

  .mob-m-85 {
    margin: 85px !important;
  }

  .mob-mt-85 {
    margin-top: 85px !important;
  }

  .mob-mb-85 {
    margin-bottom: 85px !important;
  }

  .mob-ml-85 {
    margin-left: 85px !important;
  }

  .mob-mr-85 {
    margin-right: 85px !important;
  }

  .mob-mx-85 {
    margin-left: 85px !important;
    margin-right: 85px !important;
  }

  .mob-my-85 {
    margin-top: 85px !important;
    margin-bottom: 85px !important;
  }

  .mob-m-90 {
    margin: 90px !important;
  }

  .mob-mt-90 {
    margin-top: 90px !important;
  }

  .mob-mb-90 {
    margin-bottom: 90px !important;
  }

  .mob-ml-90 {
    margin-left: 90px !important;
  }

  .mob-mr-90 {
    margin-right: 90px !important;
  }

  .mob-mx-90 {
    margin-left: 90px !important;
    margin-right: 90px !important;
  }

  .mob-my-90 {
    margin-top: 90px !important;
    margin-bottom: 90px !important;
  }

  .mob-m-95 {
    margin: 95px !important;
  }

  .mob-mt-95 {
    margin-top: 95px !important;
  }

  .mob-mb-95 {
    margin-bottom: 95px !important;
  }

  .mob-ml-95 {
    margin-left: 95px !important;
  }

  .mob-mr-95 {
    margin-right: 95px !important;
  }

  .mob-mx-95 {
    margin-left: 95px !important;
    margin-right: 95px !important;
  }

  .mob-my-95 {
    margin-top: 95px !important;
    margin-bottom: 95px !important;
  }

  .mob-m-100 {
    margin: 100px !important;
  }

  .mob-mt-100 {
    margin-top: 100px !important;
  }

  .mob-mb-100 {
    margin-bottom: 100px !important;
  }

  .mob-ml-100 {
    margin-left: 100px !important;
  }

  .mob-mr-100 {
    margin-right: 100px !important;
  }

  .mob-mx-100 {
    margin-left: 100px !important;
    margin-right: 100px !important;
  }

  .mob-my-100 {
    margin-top: 100px !important;
    margin-bottom: 100px !important;
  }
}

.dt-mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.tab-mx-auto {
  margin-left: auto !important;
  margin-right: auto !important;
}

.mob-mx-auto {
  margin-left: auto !important;
  margin-right: auto !important;
}

.dt-ls-0 {
  letter-spacing: 0px;
}

.dt-ls-1 {
  letter-spacing: 1px;
}

.dt-ls-2 {
  letter-spacing: 2px;
}

.dt-ls-3 {
  letter-spacing: 3px;
}

.dt-ls-4 {
  letter-spacing: 4px;
}

.dt-ls-5 {
  letter-spacing: 5px;
}

.dt-ls-6 {
  letter-spacing: 6px;
}

.dt-ls-7 {
  letter-spacing: 7px;
}

.dt-ls-8 {
  letter-spacing: 8px;
}

.dt-ls-9 {
  letter-spacing: 9px;
}

.dt-ls-10 {
  letter-spacing: 10px;
}

@media (max-width: 991px) {
  .tab-ls-0 {
    letter-spacing: 0px !important;
  }

  .tab-ls-1 {
    letter-spacing: 1px !important;
  }

  .tab-ls-2 {
    letter-spacing: 2px !important;
  }

  .tab-ls-3 {
    letter-spacing: 3px !important;
  }

  .tab-ls-4 {
    letter-spacing: 4px !important;
  }

  .tab-ls-5 {
    letter-spacing: 5px !important;
  }

  .tab-ls-6 {
    letter-spacing: 6px !important;
  }

  .tab-ls-7 {
    letter-spacing: 7px !important;
  }

  .tab-ls-8 {
    letter-spacing: 8px !important;
  }

  .tab-ls-9 {
    letter-spacing: 9px !important;
  }

  .tab-ls-10 {
    letter-spacing: 10px !important;
  }
}

@media (max-width: 767px) {
  .mob-ls-0 {
    letter-spacing: 0px !important;
  }

  .mob-ls-1 {
    letter-spacing: 1px !important;
  }

  .mob-ls-2 {
    letter-spacing: 2px !important;
  }

  .mob-ls-3 {
    letter-spacing: 3px !important;
  }

  .mob-ls-4 {
    letter-spacing: 4px !important;
  }

  .mob-ls-5 {
    letter-spacing: 5px !important;
  }

  .mob-ls-6 {
    letter-spacing: 6px !important;
  }

  .mob-ls-7 {
    letter-spacing: 7px !important;
  }

  .mob-ls-8 {
    letter-spacing: 8px !important;
  }

  .mob-ls-9 {
    letter-spacing: 9px !important;
  }

  .mob-ls-10 {
    letter-spacing: 10px !important;
  }
}

.dt-text-left {
  text-align: left;
}

.dt-text-center {
  text-align: center;
}

.dt-text-right {
  text-align: right;
}

.dt-text-justify {
  text-align: justify;
}

@media (max-width: 991px) {
  .tab-text-left {
    text-align: left !important;
  }

  .tab-text-center {
    text-align: center !important;
  }

  .tab-text-right {
    text-align: right !important;
  }

  .tab-text-justify {
    text-align: justify !important;
  }
}

@media (max-width: 767px) {
  .mob-text-left {
    text-align: left !important;
  }

  .mob-text-center {
    text-align: center !important;
  }

  .mob-text-right {
    text-align: right !important;
  }

  .mob-text-justify {
    text-align: justify !important;
  }
}

.td-underline {
  text-decoration: underline;
}

.td-line-through {
  text-decoration: line-through;
}

.td-none {
  text-decoration: none;
}

.tt-uppercase {
  text-transform: uppercase;
}

.tt-lowercase {
  text-transform: lowercase;
}

.tt-capitalize {
  text-transform: capitalize;
}

.tt-normal {
  text-transform: none;
}

.dt-block {
  display: block;
}

.dt-inline {
  display: inline;
}

.dt-inlineblock {
  display: inline-block;
}

.dt-flex {
  display: flex;
}

.dt-inlineflex {
  display: inline-flex;
}

.dt-grid {
  display: grid;
}

.dt-table {
  display: table;
}

.dt-none {
  display: none;
}

@media (max-width: 991px) {
  .tab-block {
    display: block !important;
  }

  .tab-inline {
    display: inline !important;
  }

  .tab-inlineblock {
    display: inline-block !important;
  }

  .tab-flex {
    display: flex !important;
  }

  .tab-inlineflex {
    display: inline-flex !important;
  }

  .tab-grid {
    display: grid !important;
  }

  .tab-table {
    display: table !important;
  }

  .tab-none {
    display: none !important;
  }
}

@media (max-width: 767px) {
  .mob-block {
    display: block !important;
  }

  .mob-inline {
    display: inline !important;
  }

  .mob-inlineblock {
    display: inline-block !important;
  }

  .mob-flex {
    display: flex !important;
  }

  .mob-inlineflex {
    display: inline-flex !important;
  }

  .mob-grid {
    display: grid !important;
  }

  .mob-table {
    display: table !important;
  }

  .mob-none {
    display: none !important;
  }
}

.fd-row {
  flex-direction: row;
}

.fd-row-reverse {
  flex-direction: row-reverse;
}

.fd-col {
  flex-direction: column;
}

.fd-col-reverse {
  flex-direction: column-reverse;
}

.fw-wrap {
  flex-wrap: wrap;
}

.fw-nowrap {
  flex-wrap: nowrap;
}

.fw-wrap-reverse {
  flex-wrap: wrap-reverse;
}

.dt-jc-start {
  justify-content: flex-start;
}

.dt-jc-center {
  justify-content: center;
}

.dt-jc-end {
  justify-content: flex-end;
}

.dt-jc-between {
  justify-content: space-between;
}

.dt-jc-around {
  justify-content: space-around;
}

.dt-jc-evenly {
  justify-content: space-evenly;
}

@media (max-width: 991px) {
  .tab-jc-start {
    justify-content: flex-start !important;
  }

  .tab-jc-center {
    justify-content: center !important;
  }

  .tab-jc-end {
    justify-content: flex-end !important;
  }

  .tab-jc-between {
    justify-content: space-between !important;
  }

  .tab-jc-around {
    justify-content: space-around !important;
  }

  .tab-jc-evenly {
    justify-content: space-evenly !important;
  }
}

@media (max-width: 767px) {
  .mob-jc-start {
    justify-content: flex-start !important;
  }

  .mob-jc-center {
    justify-content: center !important;
  }

  .mob-jc-end {
    justify-content: flex-end !important;
  }

  .mob-jc-between {
    justify-content: space-between !important;
  }

  .mob-jc-around {
    justify-content: space-around !important;
  }

  .mob-jc-evenly {
    justify-content: space-evenly !important;
  }
}

.dt-ai-start {
  align-items: flex-start;
}

.dt-ai-center {
  align-items: center;
}

.dt-ai-end {
  align-items: flex-end;
}

.dt-ai-stretch {
  align-items: stretch;
}

.dt-ai-baseline {
  align-items: baseline;
}

@media (max-width: 991px) {
  .tab-ai-start {
    align-items: flex-start !important;
  }

  .tab-ai-center {
    align-items: center !important;
  }

  .tab-ai-end {
    align-items: flex-end !important;
  }

  .tab-ai-stretch {
    align-items: stretch !important;
  }

  .tab-ai-baseline {
    align-items: baseline !important;
  }
}

@media (max-width: 767px) {
  .mob-ai-start {
    align-items: flex-start !important;
  }

  .mob-ai-center {
    align-items: center !important;
  }

  .mob-ai-end {
    align-items: flex-end !important;
  }

  .mob-ai-stretch {
    align-items: stretch !important;
  }

  .mob-ai-baseline {
    align-items: baseline !important;
  }
}

/* Position - Desktop */
.dt-pos-static {
  position: static;
}

.dt-pos-relative {
  position: relative;
}

.dt-pos-absolute {
  position: absolute;
}

.dt-pos-fixed {
  position: fixed;
}

.dt-pos-sticky {
  position: sticky;
}

.dt-pos-initial {
  position: initial;
}

@media (max-width: 991px) {
  .tab-pos-static {
    position: static !important;
  }

  .tab-pos-relative {
    position: relative !important;
  }

  .tab-pos-absolute {
    position: absolute !important;
  }

  .tab-pos-fixed {
    position: fixed !important;
  }

  .tab-pos-sticky {
    position: sticky !important;
  }

  .tab-pos-initial {
    position: initial !important;
  }
}

@media (max-width: 767px) {
  .mob-pos-static {
    position: static !important;
  }

  .mob-pos-relative {
    position: relative !important;
  }

  .mob-pos-absolute {
    position: absolute !important;
  }

  .mob-pos-fixed {
    position: fixed !important;
  }

  .mob-pos-sticky {
    position: sticky !important;
  }

  .mob-pos-initial {
    position: initial !important;
  }
}

.center-all {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.center-x {
  left: 50%;
  transform: translateX(-50%);
}

.center-y {
  top: 50%;
  transform: translateY(-50%);
}

.w-auto {
  width: auto;
}

.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}

.w-0 {
  width: 0;
}

.w-25 {
  width: 25%;
}

.w-50 {
  width: 50%;
}

.w-75 {
  width: 75%;
}

.w-100 {
  width: 100%;
}

.w-vw-25 {
  width: 25vw;
}

.w-vw-50 {
  width: 50vw;
}

.w-vw-75 {
  width: 75vw;
}

.w-vw-100 {
  width: 100vw;
}

.h-auto {
  height: auto;
}

.h-fit {
  height: -moz-fit-content;
  height: fit-content;
}

.h-0 {
  height: 0;
}

.h-25 {
  height: 25%;
}

.h-50 {
  height: 50%;
}

.h-75 {
  height: 75%;
}

.h-100 {
  height: 100%;
}

.h-vh-25 {
  height: 25vh;
}

.h-vh-50 {
  height: 50vh;
}

.h-vh-75 {
  height: 75vh;
}

.h-vh-100 {
  height: 100vh;
}

.ov-hidden {
  overflow: hidden;
}

.ov-scroll {
  overflow: scroll;
}

.ov-auto {
  overflow: auto;
}

.ov-visible {
  overflow: visible;
}

.ovx-hidden {
  overflow-x: hidden;
}

.ovx-scroll {
  overflow-x: scroll;
}

.ovx-auto {
  overflow-x: auto;
}

.ovx-visible {
  overflow-x: visible;
}

.ovy-hidden {
  overflow-y: hidden;
}

.ovy-scroll {
  overflow-y: scroll;
}

.ovy-auto {
  overflow-y: auto;
}

.ovy-visible {
  overflow-y: visible;
}

/* Border Radius */
.br-0 {
  border-radius: 0;
}

.br-2 {
  border-radius: 2px;
}

.br-4 {
  border-radius: 4px;
}

.br-6 {
  border-radius: 6px;
}

.br-8 {
  border-radius: 8px;
}

.br-10 {
  border-radius: 10px;
}

.br-12 {
  border-radius: 12px;
}

.br-16 {
  border-radius: 16px;
}

.br-20 {
  border-radius: 20px;
}

.br-full {
  border-radius: 9999px;
}

.br-circle {
  border-radius: 50%;
}

.br-tl-4 {
  border-top-left-radius: 4px;
}

.br-tr-4 {
  border-top-right-radius: 4px;
}

.br-bl-4 {
  border-bottom-left-radius: 4px;
}

.br-br-4 {
  border-bottom-right-radius: 4px;
}

.br-t-8 {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.br-b-8 {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.br-l-8 {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.br-r-8 {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

.sh-sm {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
}

.sh-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
}

.sh-lg {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.1);
}

.ol-none {
  outline: none;
}

.tran {
  transition: all 0.3s ease;
}

.op-0 {
  opacity: 0;
}

.op-10 {
  opacity: 0.1;
}

.op-20 {
  opacity: 0.2;
}

.op-30 {
  opacity: 0.3;
}

.op-40 {
  opacity: 0.4;
}

.op-50 {
  opacity: 0.5;
}

.op-60 {
  opacity: 0.6;
}

.op-70 {
  opacity: 0.7;
}

.op-80 {
  opacity: 0.8;
}

.op-90 {
  opacity: 0.9;
}

.op-100 {
  opacity: 1;
}

/* Hover Opacity */
.hov-op-0:hover {
  opacity: 0;
}

.hov-op-10:hover {
  opacity: 0.1;
}

.hov-op-20:hover {
  opacity: 0.2;
}

.hov-op-30:hover {
  opacity: 0.3;
}

.hov-op-40:hover {
  opacity: 0.4;
}

.hov-op-50:hover {
  opacity: 0.5;
}

.hov-op-60:hover {
  opacity: 0.6;
}

.hov-op-70:hover {
  opacity: 0.7;
}

.hov-op-80:hover {
  opacity: 0.8;
}

.hov-op-90:hover {
  opacity: 0.9;
}

.hov-op-100:hover {
  opacity: 1;
}

.z-0 {
  z-index: 0;
}

.z-1 {
  z-index: 1;
}

.z-10 {
  z-index: 10;
}

.z-50 {
  z-index: 50;
}

.z-100 {
  z-index: 100;
}

.z-500 {
  z-index: 500;
}

.z-999 {
  z-index: 999;
}

.z-max {
  z-index: 9999;
}

/* Cursor */
.cur-pointer {
  cursor: pointer;
}

.cur-default {
  cursor: default;
}

.cur-move {
  cursor: move;
}

.cur-na {
  cursor: not-allowed;
}

.cur-text {
  cursor: text;
}

/* Visibility */
.vis-visible {
  visibility: visible;
}

.vis-hidden {
  visibility: hidden;
}

.vis-collapse {
  visibility: collapse;
}

/* Object Fit */
.obj-cover {
  -o-object-fit: cover;
  object-fit: cover;
}

.obj-contain {
  -o-object-fit: contain;
  object-fit: contain;
}

.obj-fill {
  -o-object-fit: fill;
  object-fit: fill;
}

/* List Style */
.lst-none {
  list-style: none;
}

.lst-disc {
  list-style: disc;
}

.lst-circle {
  list-style: circle;
}

.lst-square {
  list-style: square;
}

.lst-decimal {
  list-style: decimal;
}

.lst-lower {
  list-style: lower-alpha;
}

.lst-upper {
  list-style: upper-alpha;
}

.lst-in {
  list-style-position: inside;
}

.lst-out {
  list-style-position: outside;
}

.lst-decimal-in {
  list-style: decimal inside;
}

.lst-disc-out {
  list-style: disc outside;
}

/* Table Layout */
.tbl-auto {
  table-layout: auto;
}

.tbl-fixed {
  table-layout: fixed;
}

.tbl-b-0 {
  border: none;
}

.tbl-b {
  border: 1px solid #dddddd;
}

.tbl-collapse {
  border-collapse: collapse;
}

.tbl-separate {
  border-collapse: separate;
}

.tbl-cell-b th,
.tbl-cell-b td {
  border: 1px solid #dddddd;
}

.tbl-strip tr:nth-child(even) {
  background-color: #f9f9f9;
}

.tbl-hover tr:hover {
  background-color: #f1f1f1;
}
`,
    {
      headers: {
        "Content-Type": "text/css",
        "Cache-Control": "no-store",
      },
    }
  );
}