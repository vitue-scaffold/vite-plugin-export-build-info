import path from 'path';
import { Plugin, ResolvedConfig } from 'vite';
import { existsSync, createFileSync, writeFile } from 'fs-extra';
import getRepoInfo from 'git-repo-info';
import { format } from 'date-fns';
import chalk from 'chalk';
import { getGitUserInfo } from './git-user';

const name = '@vitue/export-build-info';
const logInfo = (info: string) => console.log(`${chalk.blue(name)}`, chalk.green(info));
const logError = (info: string, err: Error) => console.log(`${chalk.blue(name)}`, chalk.red(info), err);

const createOutDirPathIfNotExist = (path: string) => {
  if (!existsSync(path)) {
    createFileSync(path);
  }
};

const getGitInfo = (extend?: object) => {
  const repoGitInfo = getRepoInfo();
  const gitConfigUserInfo = getGitUserInfo();

  let baseInfo = {
    buildTime: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
    gitUser: gitConfigUserInfo,
    ...repoGitInfo,
  };

  if (extend && Object.keys(extend).length > 0) {
    baseInfo = { ...extend, ...baseInfo };
  }

  return baseInfo;
};

// 将对象转化成一属性一行的文本
const obj2string = (obj: any): string => {
  let str = '';
  for (let key in obj) {
    str += `${key} = ${obj[key]} \n`;
  }
  return str;
}

interface IExportBuildInfo {
  /** 输出的文件名，默认为 build-info */
  fileName?: string;
  /** 扩展信息，内容会添加到输出内容中（若字段相同，会被覆盖）*/ 
  extend?: object;
}

export const ExportBuildInfo = (options?: IExportBuildInfo): Plugin => {
  let fileName = options?.fileName || 'build-info';
  let config: ResolvedConfig;

  return {
    enforce: 'post',
    apply: 'build',
    name,

    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },

    closeBundle() {
      const output = path.resolve(config.root, config.build.outDir);

      createOutDirPathIfNotExist(output);

      const info = getGitInfo(options?.extend);
      writeFile(path.join(output, fileName), obj2string(info), (err) => {
        if (err) return logError('Failed!', err);
        logInfo(`Successfully exported '${fileName}'.`);
      });
    }
  };
};

export default {
  ExportBuildInfo,
};