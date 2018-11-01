package com.first.lovemusic.utils;
import org.apache.commons.lang3.StringUtils;
import org.codehaus.jackson.map.DeserializationConfig;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.SerializationConfig;
import org.codehaus.jackson.map.annotate.JsonSerialize.Inclusion;
import org.codehaus.jackson.type.JavaType;
import org.codehaus.jackson.type.TypeReference;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.List;

/**
 * Jackson������
 *
 * @author suddev
 * @create 2017-11-25 2:18 PM
 **/
public class JsonUtils {

    private static ObjectMapper objectMapper = new ObjectMapper();

    static {
        // �����ֶ�ȫ������
        objectMapper.setSerializationInclusion(Inclusion.NON_DEFAULT);

        // ȡ��Ĭ��ת��timestamps��ʽ
        objectMapper.configure(SerializationConfig.Feature.WRITE_DATES_AS_TIMESTAMPS,false);

        // ���Կ�beanתjson�Ĵ���
        objectMapper.configure(SerializationConfig.Feature.FAIL_ON_EMPTY_BEANS,false);

        // ͳһ���ڸ�ʽyyyy-MM-dd HH:mm:ss
     //   objectMapper.setDateFormat(new SimpleDateFormat(DateTimeUtil.STANDARD_FORMAT));

        // ������json�ַ����д���,������java�����в����ڶ�Ӧ���Ե����
        objectMapper.configure(DeserializationConfig.Feature.FAIL_ON_UNKNOWN_PROPERTIES,false);
    }

    /**
     * Objectתjson�ַ���
     * @param obj
     * @param <T>
     * @return
     */
    public static <T> String obj2String(T obj){
        if (obj == null){
            return null;
        }
        try {
            return obj instanceof String ? (String) obj : objectMapper.writeValueAsString(obj);
        } catch (Exception e) {
            System.out.println("Parse object to String error");
            e.printStackTrace();
            return null;
        }
    }

    /**
     * Objectתjson�ַ�������ʽ������
     * @param obj
     * @param <T>
     * @return
     */
    public static <T> String obj2StringPretty(T obj){
        if (obj == null){
            return null;
        }
        try {
            return obj instanceof String ? (String) obj : objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj);
        } catch (Exception e) {
            System.out.println("Parse object to String error");
            e.printStackTrace();
            return null;
        }
    }

    /**
     * stringתobject
     * @param str json�ַ���
     * @param clazz ��ת����class
     * @param <T>
     * @return
     */
    public static <T> T string2Obj(String str,Class<T> clazz){
        if (StringUtils.isEmpty(str) || clazz == null){
            return null;
        }
        try {
            return clazz.equals(String.class)? (T) str :objectMapper.readValue(str,clazz);
        } catch (IOException e) {
            System.out.println("Parse String to Object error");
            e.printStackTrace();
            return null;
        }
    }

    /**
     * stringתobject
     * @param str json�ַ���
     * @param typeReference ��ת������������
     * @param <T>
     * @return
     */
    public static <T> T string2Obj(String str, TypeReference<T> typeReference){
        if (StringUtils.isEmpty(str) || typeReference == null){
            return null;
        }
        try {
            return (T)(typeReference.getType().equals(String.class)? str :objectMapper.readValue(str,typeReference));
        } catch (IOException e) {
            System.out.println("Parse String to Object error");
            e.printStackTrace();
            return null;
        }
    }

    /**
     * stringתobject ����תΪ���϶���
     * @param str json�ַ���
     * @param collectionClass ��ת����class
     * @param elementClasses ��ת�����ж�������class
     * @param <T>
     * @return
     */
    public static <T> T string2Obj(String str,Class<?> collectionClass,Class<?>... elementClasses){
        JavaType javaType = objectMapper.getTypeFactory().constructParametricType(collectionClass,elementClasses);
        try {
            return objectMapper.readValue(str,javaType);
        } catch (IOException e) {
            System.out.println("Parse String to Object error");
            e.printStackTrace();
            return null;
        }
    }

	public static String sucessJson(List<?> list) {
		
		return null;
	}
}