# vite-plugin-export-build-info

ðµ Automatically export the relevant information of the project after the build, such as git branch, build time, etc.

[![npm version](https://badge.fury.io/js/@vitue%2Fexport-build-info.svg)](https://badge.fury.io/js/@vitue%2Fexport-build-info) [![Test](https://github.com/vitue-scaffold/vite-plugin-export-build-info/actions/workflows/test.yml/badge.svg)](https://github.com/vitue-scaffold/vite-plugin-export-build-info/actions/workflows/test.yml)
## å¨æº

1. å¦æé¡¹ç®ä¼è¢«é¨ç½²å°å¤ä¸ªçå®¢æ·ç¯å¢ï¼èä½ å¯è½ä¸ç¥éï¼
2. å¦æé¡¹ç®å¼åçå¨æä¸ç¨³å®ï¼ä¾å¦æ­¤æ¬¡åå¸è·ç¦»ä¸ä¸æ¬¡è¶è¿ä¸å¹´ï¼
3. å¦æé¡¹ç®åæ¯éå¸¸å¤ï¼å¹¶ä¸å¹´ä»½èè¿ï¼
4. å¦æé¡¹ç®äººåé¢ç¹æ´æ¢ããã

ä»¥ä¸ï¼è¯¥æä»¶å¤çä¸è¿°é®é¢çæ¹å¼æ¯ï¼

> å¨æååºéæèµæºçåæ¶ï¼å¯¼åºä¸äºå³é®ä¿¡æ¯å°ç¹å®æä»¶ï¼æ¹ä¾¿åç»­çå¼åç¡®è®¤ã

å¶ä¸­ï¼ä¼åå«é¡¹ç®ç Git ä¿¡æ¯ï¼ä¸»è¦éè¿[git-repo-info](https://github.com/rwjblue/git-repo-info)å®ç°ï¼ä¼æå°`git-repo-info`è¿åçææä¿¡æ¯ãåæ¶è¿åæ¬é¡¹ç®æå»ºçæ¶é´ï¼å½åç¨æ·ï¼æå¨è®¾å¤ï¼ç Git `username`å`email`ä¿¡æ¯ï¼å¹¶ä¸æ¯ææ©å±ã

## å®è£

> éè¦ Vite@2.7+ çæ¬ã

```bash
yarn add @vitue/export-build-info -D

# npm
npm install --save-dev @vitue/export-build-info
```

## ä½¿ç¨

```js
// vite.config.ts/.js
import { ExportBuildInfo } from '@vitue/export-build-info'

export default defineConfig({
  plugins: [
    vue(),

    // è¯¥æä»¶åªä¼å¨ build é¶æ®µçæåæ§è¡
    ExportBuildInfo({
      fileName: 'build-info',
      extend: {
        oha: 'oha'
      }
    })
  ],
})
```

**åæ°è¯´æï¼**

* `fileName`ï¼éå¿éï¼é»è®¤ä¸º build-infoï¼æä»¶è¾åºä½ç½®ä¼è· Vite ç build.outDir ä¿æä¸è´ï¼
* `extend`ï¼éå¿éï¼æ©å±å±æ§ï¼è¥å­æ®µå²çªï¼ä¼è¢«è¦çï¼å¹¶ä¸æ©å±å­æ®µä¼æå¨æåé¢ã

> å¯¼åºçæä»¶æ²¡åç¼åã


## License

MIT.

