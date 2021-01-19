import CacheServiceClass from './CacheService';
import type HttpRequestType from './types/HttpRequest';
import HttpResponseClass from './HttpResponse';
import LoggerClass from './Logger';
import PropertiesServiceClass from './PropertiesService';
import ScriptAppClass from './ScriptApp';
import { SpreadsheetApp as SpreadsheetAppInstance } from './SpreadsheetApp';
import UrlFetchAppClass from './UrlFetchApp';

export const CacheService = CacheServiceClass;
export const Logger = LoggerClass;
export const HttpResponse = HttpResponseClass;
export const PropertiesService = PropertiesServiceClass;
export const ScriptApp = ScriptAppClass;
export const SpreadsheetApp = SpreadsheetAppInstance;
export const UrlFetchApp = UrlFetchAppClass;
export type HttpRequest = HttpRequestType;

