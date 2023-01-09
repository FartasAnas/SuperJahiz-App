package pfe.api.superjahiz.utils;

import com.fasterxml.jackson.databind.util.StdConverter;

public class ToLowerCaseDeserializer extends StdConverter<String, String>  {
    @Override
    public String convert(String value) {
        return value.toLowerCase();
    }
}
