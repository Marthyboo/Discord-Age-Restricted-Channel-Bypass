/**
 * @name AgeVerificationModifier
 * @version 1.0.0
 * @description Sets the age verification status of the current user to 3 in Discord.
 * @author Martmatch
 * @authorId Null
 */

/*@cc_on
@if (@_jscript)
    
    // Offer to self-install for clueless users that try to run this directly.
    var shell = WScript.CreateObject("WScript.Shell");
    var fs = new ActiveXObject("Scripting.FileSystemObject");
    var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\\BetterDiscord\\plugins");
    var pathSelf = WScript.ScriptFullName;
    shell.Popup("It looks like you've mistakenly tried to run me directly. \n(Don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);
    if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
        shell.Popup("I'm in the correct folder already.", 0, "I'm already installed", 0x40);
    } else if (!fs.FolderExists(pathPlugins)) {
        shell.Popup("I can't find the BetterDiscord plugins folder.\nAre you sure it's even installed?", 0, "Can't install myself", 0x10);
    } else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
        fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
        shell.Exec("explorer " + pathPlugins);
        shell.Popup("I'm installed!", 0, "Successfully installed", 0x40);
    }
    WScript.Quit();

@else@*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/plugins/AgeVerificationModifier/index.ts
var AgeVerificationModifier_exports = {};
__export(AgeVerificationModifier_exports, {
  default: () => AgeVerificationModifier
});
module.exports = __toCommonJS(AgeVerificationModifier_exports);

class AgeVerificationModifier {
  constructor(meta) {
    this.meta = meta;
  }

  start() {
    try {
      const modules = Object.values(webpackChunkdiscord_app.push([[Symbol()], {}, r => r.c]));
      const userModule = modules.find(x => x?.exports?.default?.__proto__?.getCurrentUser);

      if (userModule?.exports?.default?.getCurrentUser) {
        userModule.exports.default.getCurrentUser().ageVerificationStatus = 3;
      }
    } catch (error) {
      // Silent error handling
    }
  }

  stop() {
    // No cleanup needed
  }
}

/*@end@*/
