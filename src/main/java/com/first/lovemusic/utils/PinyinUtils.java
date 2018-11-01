package com.first.lovemusic.utils;
import net.sourceforge.pinyin4j.PinyinHelper;
import net.sourceforge.pinyin4j.format.HanyuPinyinCaseType;
import net.sourceforge.pinyin4j.format.HanyuPinyinOutputFormat;
import net.sourceforge.pinyin4j.format.HanyuPinyinToneType;
import net.sourceforge.pinyin4j.format.HanyuPinyinVCharType;
import net.sourceforge.pinyin4j.format.exception.BadHanyuPinyinOutputFormatCombination;
import org.apache.commons.lang3.StringUtils;

import java.util.regex.Matcher;
import java.util.regex.Pattern;


public class PinyinUtils {
   /**
    * ����ת��Ϊ����ƴ������ĸ��Ӣ���ַ�ת��Ϊ����ĸ��д
    * @param a
    * @return
    */
   public static String getFirst(String a){
       String pinyinName = "";
       if (StringUtils.isNotBlank(a)){
           if (isChinese(a)){
               //�Ǻ���
               char[] nameChar = a.toCharArray();
               HanyuPinyinOutputFormat defaultFormat = new HanyuPinyinOutputFormat();
               defaultFormat.setCaseType(HanyuPinyinCaseType.UPPERCASE);
               defaultFormat.setToneType(HanyuPinyinToneType.WITHOUT_TONE);
               for (int i = 0; i < nameChar.length; i++) {
                       try {
                           pinyinName += PinyinHelper.toHanyuPinyinStringArray(
                                   nameChar[i], defaultFormat)[0].charAt(0);
                       } catch (BadHanyuPinyinOutputFormatCombination e) {
                           e.printStackTrace();
                           return null;
                       }
               }
               return pinyinName;
           }else if (isEnglish(a)){
               //���Ǻ���
               if (a.length()>=1){
                   pinyinName = a.substring(0,1).toUpperCase();
                   return pinyinName;
               }
           }else {
               return "1";
           }
       }
       return null;
   }
   private static boolean isChinese(String str) {
       String regEx = "[\u4e00-\u9fa5]";
       Pattern pat = Pattern.compile(regEx);
       Matcher matcher = pat.matcher(str);
       boolean flg = false;
       if (matcher.find())
           flg = true;

       return flg;
   }
   private static boolean isEnglish(String str) {
       String regEx = "[A-Za-z]";
       Pattern pat = Pattern.compile(regEx);
       Matcher matcher = pat.matcher(str);
       boolean flg = false;
       if (matcher.find())
           flg = true;
       return flg;
   }
}