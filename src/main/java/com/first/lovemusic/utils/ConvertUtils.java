package com.first.lovemusic.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

public class ConvertUtils {
    
	/**
	 * 日期  date--》转为 字符串
	 * @param date
	 * @return
	 */
	public static String conversionTo(Date  date) {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String d = null;
		d = sdf.format(date);
		return d;
	}
	
}
