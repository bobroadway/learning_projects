package java112.project3;
 
/**
 *  This is a JavaBean for the HttpServletData portion of Project 3.
 *
 *@author    bbroadway
 */
public class HttpRequestData {

	// instance variables
    private String remoteHost;
    private String remoteHostAddress;
    private String httpMethod;
    private String requestURI;
    private String requestURL;
    private String requestProtocol;
    private String serverName;
    private String serverPort;
    private String serverLocale;
    private String queryString;
    private String queryParameterValue;
    private String requestHeaderUserAgentValue;
 
 
    /**
     *  Constructor
     */
    public HttpRequestData() { 
    }
    
    // getters
    public String getRemoteHost() {
        return this.remoteHost;
    }
    public String getRemoteHostAddress() {
        return this.remoteHostAddress;
    }
    public String getHttpMethod() {
        return this.httpMethod;
    }
    public String getRequestURI() {
        return this.requestURI;
    }
    public String getRequestURL() {
        return this.requestURL;
    }
    public String getRequestProtocol() {
        return this.requestProtocol;
    }
    public String getServerName() {
        return this.serverName;
    }
    public String getServerPort() {
        return this.serverPort;
    }
    public String getServerLocale() {
        return this.serverLocale;
    }
    public String getQueryString() {
        return this.queryString;
    }
    public String getQueryParameterValue() {
        return this.queryParameterValue;
    }
    public String getRequestHeaderUserAgentValue() {
        return this.requestHeaderUserAgentValue;
    }
    
    // setters
    public void setRemoteHost(String remoteHost) {
		this.remoteHost = remoteHost;
	}
    public void setRemoteHostAddress(String remoteHostAddress) {
		this.remoteHostAddress = remoteHostAddress;
	}
    public void setHttpMethod(String httpMethod) {
		this.httpMethod = httpMethod;
	}
    public void setRequestURI(String requestURI) {
		this.requestURI = requestURI;
	}
    public void setRequestURL(String requestURL) {
		this.requestURL = requestURL;
	}
    public void setRequestProtocol(String requestProtocol) {
		this.requestProtocol = requestProtocol;
	}
    public void setServerName(String serverName) {
		this.serverName = serverName;
	}
    public void setServerPort(String serverPort) {
		this.serverPort = serverPort;
	}
    public void setServerLocale(String serverLocale) {
		this.serverLocale = serverLocale;
	}
    public void setQueryString(String queryString) {
		this.queryString = queryString;
	}
    public void setQueryParameterValue(String queryParameterValue) {
		this.queryParameterValue = queryParameterValue;
	}
    public void setRequestHeaderUserAgentValue(
			String requestHeaderUserAgentValue) {
		this.requestHeaderUserAgentValue = requestHeaderUserAgentValue;
	}
    
 
}
