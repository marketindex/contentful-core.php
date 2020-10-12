
window.projectVersion = '1.5.0';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Contentful" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Contentful.html">Contentful</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Contentful_Core" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Contentful/Core.html">Core</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Contentful_Core_Api" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Contentful/Core/Api.html">Api</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Contentful_Core_Api_BaseClient" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/Api/BaseClient.html">BaseClient</a>                    </div>                </li>                            <li data-name="class:Contentful_Core_Api_BaseQuery" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/Api/BaseQuery.html">BaseQuery</a>                    </div>                </li>                            <li data-name="class:Contentful_Core_Api_DateTimeImmutable" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/Api/DateTimeImmutable.html">DateTimeImmutable</a>                    </div>                </li>                            <li data-name="class:Contentful_Core_Api_Exception" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/Api/Exception.html">Exception</a>                    </div>                </li>                            <li data-name="class:Contentful_Core_Api_Link" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/Api/Link.html">Link</a>                    </div>                </li>                            <li data-name="class:Contentful_Core_Api_LinkResolverInterface" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/Api/LinkResolverInterface.html">LinkResolverInterface</a>                    </div>                </li>                            <li data-name="class:Contentful_Core_Api_Location" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/Api/Location.html">Location</a>                    </div>                </li>                            <li data-name="class:Contentful_Core_Api_Message" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/Api/Message.html">Message</a>                    </div>                </li>                            <li data-name="class:Contentful_Core_Api_RequestBuilder" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/Api/RequestBuilder.html">RequestBuilder</a>                    </div>                </li>                            <li data-name="class:Contentful_Core_Api_UserAgentGenerator" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/Api/UserAgentGenerator.html">UserAgentGenerator</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Contentful_Core_Exception" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Contentful/Core/Exception.html">Exception</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Contentful_Core_Exception_AccessTokenInvalidException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/Exception/AccessTokenInvalidException.html">AccessTokenInvalidException</a>                    </div>                </li>                            <li data-name="class:Contentful_Core_Exception_BadRequestException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/Exception/BadRequestException.html">BadRequestException</a>                    </div>                </li>                            <li data-name="class:Contentful_Core_Exception_InvalidQueryException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/Exception/InvalidQueryException.html">InvalidQueryException</a>                    </div>                </li>                            <li data-name="class:Contentful_Core_Exception_NotFoundException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/Exception/NotFoundException.html">NotFoundException</a>                    </div>                </li>                            <li data-name="class:Contentful_Core_Exception_RateLimitExceededException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/Exception/RateLimitExceededException.html">RateLimitExceededException</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Contentful_Core_File" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Contentful/Core/File.html">File</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Contentful_Core_File_File" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/File/File.html">File</a>                    </div>                </li>                            <li data-name="class:Contentful_Core_File_FileInterface" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/File/FileInterface.html">FileInterface</a>                    </div>                </li>                            <li data-name="class:Contentful_Core_File_ImageFile" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/File/ImageFile.html">ImageFile</a>                    </div>                </li>                            <li data-name="class:Contentful_Core_File_ImageOptions" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/File/ImageOptions.html">ImageOptions</a>                    </div>                </li>                            <li data-name="class:Contentful_Core_File_LocalUploadFile" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/File/LocalUploadFile.html">LocalUploadFile</a>                    </div>                </li>                            <li data-name="class:Contentful_Core_File_RemoteUploadFile" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/File/RemoteUploadFile.html">RemoteUploadFile</a>                    </div>                </li>                            <li data-name="class:Contentful_Core_File_UnprocessedFileInterface" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/File/UnprocessedFileInterface.html">UnprocessedFileInterface</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Contentful_Core_Log" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Contentful/Core/Log.html">Log</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Contentful_Core_Log_NullLogger" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/Log/NullLogger.html">NullLogger</a>                    </div>                </li>                            <li data-name="class:Contentful_Core_Log_Timer" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/Log/Timer.html">Timer</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Contentful_Core_Resource" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Contentful/Core/Resource.html">Resource</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Contentful_Core_Resource_ResourceArray" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/Resource/ResourceArray.html">ResourceArray</a>                    </div>                </li>                            <li data-name="class:Contentful_Core_Resource_ResourceInterface" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/Resource/ResourceInterface.html">ResourceInterface</a>                    </div>                </li>                            <li data-name="class:Contentful_Core_Resource_SystemPropertiesInterface" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/Resource/SystemPropertiesInterface.html">SystemPropertiesInterface</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Contentful_Core_ResourceBuilder" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Contentful/Core/ResourceBuilder.html">ResourceBuilder</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Contentful_Core_ResourceBuilder_BaseResourceBuilder" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/ResourceBuilder/BaseResourceBuilder.html">BaseResourceBuilder</a>                    </div>                </li>                            <li data-name="class:Contentful_Core_ResourceBuilder_MapperInterface" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/ResourceBuilder/MapperInterface.html">MapperInterface</a>                    </div>                </li>                            <li data-name="class:Contentful_Core_ResourceBuilder_ObjectHydrator" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/ResourceBuilder/ObjectHydrator.html">ObjectHydrator</a>                    </div>                </li>                            <li data-name="class:Contentful_Core_ResourceBuilder_ResourceBuilderInterface" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Core/ResourceBuilder/ResourceBuilderInterface.html">ResourceBuilderInterface</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Contentful.html", "name": "Contentful", "doc": "Namespace Contentful"},{"type": "Namespace", "link": "Contentful/Core.html", "name": "Contentful\\Core", "doc": "Namespace Contentful\\Core"},{"type": "Namespace", "link": "Contentful/Core/Api.html", "name": "Contentful\\Core\\Api", "doc": "Namespace Contentful\\Core\\Api"},{"type": "Namespace", "link": "Contentful/Core/Exception.html", "name": "Contentful\\Core\\Exception", "doc": "Namespace Contentful\\Core\\Exception"},{"type": "Namespace", "link": "Contentful/Core/File.html", "name": "Contentful\\Core\\File", "doc": "Namespace Contentful\\Core\\File"},{"type": "Namespace", "link": "Contentful/Core/Log.html", "name": "Contentful\\Core\\Log", "doc": "Namespace Contentful\\Core\\Log"},{"type": "Namespace", "link": "Contentful/Core/Resource.html", "name": "Contentful\\Core\\Resource", "doc": "Namespace Contentful\\Core\\Resource"},{"type": "Namespace", "link": "Contentful/Core/ResourceBuilder.html", "name": "Contentful\\Core\\ResourceBuilder", "doc": "Namespace Contentful\\Core\\ResourceBuilder"},
            {"type": "Interface", "fromName": "Contentful\\Core\\Api", "fromLink": "Contentful/Core/Api.html", "link": "Contentful/Core/Api/LinkResolverInterface.html", "name": "Contentful\\Core\\Api\\LinkResolverInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\Api\\LinkResolverInterface", "fromLink": "Contentful/Core/Api/LinkResolverInterface.html", "link": "Contentful/Core/Api/LinkResolverInterface.html#method_resolveLink", "name": "Contentful\\Core\\Api\\LinkResolverInterface::resolveLink", "doc": "&quot;&quot;"},
            
            {"type": "Interface", "fromName": "Contentful\\Core\\File", "fromLink": "Contentful/Core/File.html", "link": "Contentful/Core/File/FileInterface.html", "name": "Contentful\\Core\\File\\FileInterface", "doc": "&quot;FileInterface.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\File\\FileInterface", "fromLink": "Contentful/Core/File/FileInterface.html", "link": "Contentful/Core/File/FileInterface.html#method_getFileName", "name": "Contentful\\Core\\File\\FileInterface::getFileName", "doc": "&quot;The name of this file.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\File\\FileInterface", "fromLink": "Contentful/Core/File/FileInterface.html", "link": "Contentful/Core/File/FileInterface.html#method_getContentType", "name": "Contentful\\Core\\File\\FileInterface::getContentType", "doc": "&quot;The Content- (or MIME-)Type of this file.&quot;"},
            
            {"type": "Interface", "fromName": "Contentful\\Core\\File", "fromLink": "Contentful/Core/File.html", "link": "Contentful/Core/File/UnprocessedFileInterface.html", "name": "Contentful\\Core\\File\\UnprocessedFileInterface", "doc": "&quot;UnprocessedFileInterface.&quot;"},
                    
            {"type": "Interface", "fromName": "Contentful\\Core\\ResourceBuilder", "fromLink": "Contentful/Core/ResourceBuilder.html", "link": "Contentful/Core/ResourceBuilder/MapperInterface.html", "name": "Contentful\\Core\\ResourceBuilder\\MapperInterface", "doc": "&quot;MapperInterface.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\ResourceBuilder\\MapperInterface", "fromLink": "Contentful/Core/ResourceBuilder/MapperInterface.html", "link": "Contentful/Core/ResourceBuilder/MapperInterface.html#method_map", "name": "Contentful\\Core\\ResourceBuilder\\MapperInterface::map", "doc": "&quot;Maps the given data to a resource.&quot;"},
            
            {"type": "Interface", "fromName": "Contentful\\Core\\ResourceBuilder", "fromLink": "Contentful/Core/ResourceBuilder.html", "link": "Contentful/Core/ResourceBuilder/ResourceBuilderInterface.html", "name": "Contentful\\Core\\ResourceBuilder\\ResourceBuilderInterface", "doc": "&quot;ResourceBuilderInterface.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\ResourceBuilder\\ResourceBuilderInterface", "fromLink": "Contentful/Core/ResourceBuilder/ResourceBuilderInterface.html", "link": "Contentful/Core/ResourceBuilder/ResourceBuilderInterface.html#method_build", "name": "Contentful\\Core\\ResourceBuilder\\ResourceBuilderInterface::build", "doc": "&quot;Creates or updates an object using given data.&quot;"},
            
            {"type": "Interface", "fromName": "Contentful\\Core\\Resource", "fromLink": "Contentful/Core/Resource.html", "link": "Contentful/Core/Resource/ResourceInterface.html", "name": "Contentful\\Core\\Resource\\ResourceInterface", "doc": "&quot;ResourceInterface.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\Resource\\ResourceInterface", "fromLink": "Contentful/Core/Resource/ResourceInterface.html", "link": "Contentful/Core/Resource/ResourceInterface.html#method_getSystemProperties", "name": "Contentful\\Core\\Resource\\ResourceInterface::getSystemProperties", "doc": "&quot;Returns the resource&#039;s system properties,\ndefined in the object \&quot;sys\&quot; in Contentful&#039;s responses.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Resource\\ResourceInterface", "fromLink": "Contentful/Core/Resource/ResourceInterface.html", "link": "Contentful/Core/Resource/ResourceInterface.html#method_asLink", "name": "Contentful\\Core\\Resource\\ResourceInterface::asLink", "doc": "&quot;Creates a Link representation of the current resource.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Resource\\ResourceInterface", "fromLink": "Contentful/Core/Resource/ResourceInterface.html", "link": "Contentful/Core/Resource/ResourceInterface.html#method_getId", "name": "Contentful\\Core\\Resource\\ResourceInterface::getId", "doc": "&quot;Shortcut for retrieving the resource ID\nfrom the system properties object.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Resource\\ResourceInterface", "fromLink": "Contentful/Core/Resource/ResourceInterface.html", "link": "Contentful/Core/Resource/ResourceInterface.html#method_getType", "name": "Contentful\\Core\\Resource\\ResourceInterface::getType", "doc": "&quot;Shortcut for retrieving the resource type\nfrom the system properties object.&quot;"},
            
            {"type": "Interface", "fromName": "Contentful\\Core\\Resource", "fromLink": "Contentful/Core/Resource.html", "link": "Contentful/Core/Resource/SystemPropertiesInterface.html", "name": "Contentful\\Core\\Resource\\SystemPropertiesInterface", "doc": "&quot;SystemPropertiesInterface.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\Resource\\SystemPropertiesInterface", "fromLink": "Contentful/Core/Resource/SystemPropertiesInterface.html", "link": "Contentful/Core/Resource/SystemPropertiesInterface.html#method___construct", "name": "Contentful\\Core\\Resource\\SystemPropertiesInterface::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Resource\\SystemPropertiesInterface", "fromLink": "Contentful/Core/Resource/SystemPropertiesInterface.html", "link": "Contentful/Core/Resource/SystemPropertiesInterface.html#method_getId", "name": "Contentful\\Core\\Resource\\SystemPropertiesInterface::getId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Resource\\SystemPropertiesInterface", "fromLink": "Contentful/Core/Resource/SystemPropertiesInterface.html", "link": "Contentful/Core/Resource/SystemPropertiesInterface.html#method_getType", "name": "Contentful\\Core\\Resource\\SystemPropertiesInterface::getType", "doc": "&quot;&quot;"},
            
            
            {"type": "Class", "fromName": "Contentful\\Core\\Api", "fromLink": "Contentful/Core/Api.html", "link": "Contentful/Core/Api/BaseClient.html", "name": "Contentful\\Core\\Api\\BaseClient", "doc": "&quot;Abstract client for common code for the different clients.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\Api\\BaseClient", "fromLink": "Contentful/Core/Api/BaseClient.html", "link": "Contentful/Core/Api/BaseClient.html#method___construct", "name": "Contentful\\Core\\Api\\BaseClient::__construct", "doc": "&quot;Client constructor.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\BaseClient", "fromLink": "Contentful/Core/Api/BaseClient.html", "link": "Contentful/Core/Api/BaseClient.html#method_setApplication", "name": "Contentful\\Core\\Api\\BaseClient::setApplication", "doc": "&quot;Set the application name and version. The values are used as part of the X-Contentful-User-Agent header.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\BaseClient", "fromLink": "Contentful/Core/Api/BaseClient.html", "link": "Contentful/Core/Api/BaseClient.html#method_setIntegration", "name": "Contentful\\Core\\Api\\BaseClient::setIntegration", "doc": "&quot;Set the integration name and version. The values are used as part of the X-Contentful-User-Agent header.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\BaseClient", "fromLink": "Contentful/Core/Api/BaseClient.html", "link": "Contentful/Core/Api/BaseClient.html#method_request", "name": "Contentful\\Core\\Api\\BaseClient::request", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\BaseClient", "fromLink": "Contentful/Core/Api/BaseClient.html", "link": "Contentful/Core/Api/BaseClient.html#method_getExceptionNamespace", "name": "Contentful\\Core\\Api\\BaseClient::getExceptionNamespace", "doc": "&quot;Override this method for registering a custom namespace where the Client\nwill look for an exception. If no exception is found in the custom namespace,\nthe default namespace will be used.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\BaseClient", "fromLink": "Contentful/Core/Api/BaseClient.html", "link": "Contentful/Core/Api/BaseClient.html#method_getLogger", "name": "Contentful\\Core\\Api\\BaseClient::getLogger", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\BaseClient", "fromLink": "Contentful/Core/Api/BaseClient.html", "link": "Contentful/Core/Api/BaseClient.html#method_getMessages", "name": "Contentful\\Core\\Api\\BaseClient::getMessages", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\BaseClient", "fromLink": "Contentful/Core/Api/BaseClient.html", "link": "Contentful/Core/Api/BaseClient.html#method_getHost", "name": "Contentful\\Core\\Api\\BaseClient::getHost", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\BaseClient", "fromLink": "Contentful/Core/Api/BaseClient.html", "link": "Contentful/Core/Api/BaseClient.html#method_getApi", "name": "Contentful\\Core\\Api\\BaseClient::getApi", "doc": "&quot;Returns a string representation of the API currently in use.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\BaseClient", "fromLink": "Contentful/Core/Api/BaseClient.html", "link": "Contentful/Core/Api/BaseClient.html#method_getSdkName", "name": "Contentful\\Core\\Api\\BaseClient::getSdkName", "doc": "&quot;The name of the library to be used in the User-Agent header.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\BaseClient", "fromLink": "Contentful/Core/Api/BaseClient.html", "link": "Contentful/Core/Api/BaseClient.html#method_getSdkVersion", "name": "Contentful\\Core\\Api\\BaseClient::getSdkVersion", "doc": "&quot;The version of the library to be used in the User-Agent header.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\BaseClient", "fromLink": "Contentful/Core/Api/BaseClient.html", "link": "Contentful/Core/Api/BaseClient.html#method_getApiContentType", "name": "Contentful\\Core\\Api\\BaseClient::getApiContentType", "doc": "&quot;Returns the Content-Type (MIME-Type) to be used when communication with the API.&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Core\\Api", "fromLink": "Contentful/Core/Api.html", "link": "Contentful/Core/Api/BaseQuery.html", "name": "Contentful\\Core\\Api\\BaseQuery", "doc": "&quot;BaseQuery class.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\Api\\BaseQuery", "fromLink": "Contentful/Core/Api/BaseQuery.html", "link": "Contentful/Core/Api/BaseQuery.html#method___construct", "name": "Contentful\\Core\\Api\\BaseQuery::__construct", "doc": "&quot;Query constructor.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\BaseQuery", "fromLink": "Contentful/Core/Api/BaseQuery.html", "link": "Contentful/Core/Api/BaseQuery.html#method_getQueryData", "name": "Contentful\\Core\\Api\\BaseQuery::getQueryData", "doc": "&quot;Returns the parameters to execute this query.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\BaseQuery", "fromLink": "Contentful/Core/Api/BaseQuery.html", "link": "Contentful/Core/Api/BaseQuery.html#method_getQueryString", "name": "Contentful\\Core\\Api\\BaseQuery::getQueryString", "doc": "&quot;The urlencoded query string for this query.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\BaseQuery", "fromLink": "Contentful/Core/Api/BaseQuery.html", "link": "Contentful/Core/Api/BaseQuery.html#method_setSkip", "name": "Contentful\\Core\\Api\\BaseQuery::setSkip", "doc": "&quot;Sets the index of the first result to retrieve. To reset set to NULL.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\BaseQuery", "fromLink": "Contentful/Core/Api/BaseQuery.html", "link": "Contentful/Core/Api/BaseQuery.html#method_setLimit", "name": "Contentful\\Core\\Api\\BaseQuery::setLimit", "doc": "&quot;Set the maximum number of results to retrieve. To reset set to NULL;.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\BaseQuery", "fromLink": "Contentful/Core/Api/BaseQuery.html", "link": "Contentful/Core/Api/BaseQuery.html#method_orderBy", "name": "Contentful\\Core\\Api\\BaseQuery::orderBy", "doc": "&quot;Set the order of the items retrieved by this query.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\BaseQuery", "fromLink": "Contentful/Core/Api/BaseQuery.html", "link": "Contentful/Core/Api/BaseQuery.html#method_setContentType", "name": "Contentful\\Core\\Api\\BaseQuery::setContentType", "doc": "&quot;Set the content type to which results should be limited. Set to NULL to not filter for a content type.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\BaseQuery", "fromLink": "Contentful/Core/Api/BaseQuery.html", "link": "Contentful/Core/Api/BaseQuery.html#method_setMimeTypeGroup", "name": "Contentful\\Core\\Api\\BaseQuery::setMimeTypeGroup", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\BaseQuery", "fromLink": "Contentful/Core/Api/BaseQuery.html", "link": "Contentful/Core/Api/BaseQuery.html#method_where", "name": "Contentful\\Core\\Api\\BaseQuery::where", "doc": "&quot;Add a filter condition to this query.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\BaseQuery", "fromLink": "Contentful/Core/Api/BaseQuery.html", "link": "Contentful/Core/Api/BaseQuery.html#method_select", "name": "Contentful\\Core\\Api\\BaseQuery::select", "doc": "&quot;The select operator allows you to choose what to return from an entity.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\BaseQuery", "fromLink": "Contentful/Core/Api/BaseQuery.html", "link": "Contentful/Core/Api/BaseQuery.html#method_linksToEntry", "name": "Contentful\\Core\\Api\\BaseQuery::linksToEntry", "doc": "&quot;Filters for all entries that link to an entry.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\BaseQuery", "fromLink": "Contentful/Core/Api/BaseQuery.html", "link": "Contentful/Core/Api/BaseQuery.html#method_linksToAsset", "name": "Contentful\\Core\\Api\\BaseQuery::linksToAsset", "doc": "&quot;Filters for all entries that link to an asset.&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Core\\Api", "fromLink": "Contentful/Core/Api.html", "link": "Contentful/Core/Api/DateTimeImmutable.html", "name": "Contentful\\Core\\Api\\DateTimeImmutable", "doc": "&quot;DateTimeImmutable class.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\Api\\DateTimeImmutable", "fromLink": "Contentful/Core/Api/DateTimeImmutable.html", "link": "Contentful/Core/Api/DateTimeImmutable.html#method_formatForJson", "name": "Contentful\\Core\\Api\\DateTimeImmutable::formatForJson", "doc": "&quot;Formats the string for an easier interoperability with Contentful.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\DateTimeImmutable", "fromLink": "Contentful/Core/Api/DateTimeImmutable.html", "link": "Contentful/Core/Api/DateTimeImmutable.html#method___toString", "name": "Contentful\\Core\\Api\\DateTimeImmutable::__toString", "doc": "&quot;Returns a string representation of the current object.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\DateTimeImmutable", "fromLink": "Contentful/Core/Api/DateTimeImmutable.html", "link": "Contentful/Core/Api/DateTimeImmutable.html#method_jsonSerialize", "name": "Contentful\\Core\\Api\\DateTimeImmutable::jsonSerialize", "doc": "&quot;Returns a JSON representation of the current object.&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Core\\Api", "fromLink": "Contentful/Core/Api.html", "link": "Contentful/Core/Api/Exception.html", "name": "Contentful\\Core\\Api\\Exception", "doc": "&quot;An Exception is thrown when an errors occurs while communicating with the API.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\Api\\Exception", "fromLink": "Contentful/Core/Api/Exception.html", "link": "Contentful/Core/Api/Exception.html#method___construct", "name": "Contentful\\Core\\Api\\Exception::__construct", "doc": "&quot;Exception constructor.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\Exception", "fromLink": "Contentful/Core/Api/Exception.html", "link": "Contentful/Core/Api/Exception.html#method_serialize", "name": "Contentful\\Core\\Api\\Exception::serialize", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\Exception", "fromLink": "Contentful/Core/Api/Exception.html", "link": "Contentful/Core/Api/Exception.html#method_unserialize", "name": "Contentful\\Core\\Api\\Exception::unserialize", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\Exception", "fromLink": "Contentful/Core/Api/Exception.html", "link": "Contentful/Core/Api/Exception.html#method_getRequest", "name": "Contentful\\Core\\Api\\Exception::getRequest", "doc": "&quot;Get the request that caused the exception.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\Exception", "fromLink": "Contentful/Core/Api/Exception.html", "link": "Contentful/Core/Api/Exception.html#method_getResponse", "name": "Contentful\\Core\\Api\\Exception::getResponse", "doc": "&quot;Get the associated response.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\Exception", "fromLink": "Contentful/Core/Api/Exception.html", "link": "Contentful/Core/Api/Exception.html#method_hasResponse", "name": "Contentful\\Core\\Api\\Exception::hasResponse", "doc": "&quot;Check if a response was received.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\Exception", "fromLink": "Contentful/Core/Api/Exception.html", "link": "Contentful/Core/Api/Exception.html#method_getRequestId", "name": "Contentful\\Core\\Api\\Exception::getRequestId", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Core\\Api", "fromLink": "Contentful/Core/Api.html", "link": "Contentful/Core/Api/Link.html", "name": "Contentful\\Core\\Api\\Link", "doc": "&quot;Link class.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\Api\\Link", "fromLink": "Contentful/Core/Api/Link.html", "link": "Contentful/Core/Api/Link.html#method___construct", "name": "Contentful\\Core\\Api\\Link::__construct", "doc": "&quot;Link constructor.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\Link", "fromLink": "Contentful/Core/Api/Link.html", "link": "Contentful/Core/Api/Link.html#method_getId", "name": "Contentful\\Core\\Api\\Link::getId", "doc": "&quot;Get the ID of the referenced resource.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\Link", "fromLink": "Contentful/Core/Api/Link.html", "link": "Contentful/Core/Api/Link.html#method_getLinkType", "name": "Contentful\\Core\\Api\\Link::getLinkType", "doc": "&quot;Get the type of the Link.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\Link", "fromLink": "Contentful/Core/Api/Link.html", "link": "Contentful/Core/Api/Link.html#method_jsonSerialize", "name": "Contentful\\Core\\Api\\Link::jsonSerialize", "doc": "&quot;{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Core\\Api", "fromLink": "Contentful/Core/Api.html", "link": "Contentful/Core/Api/LinkResolverInterface.html", "name": "Contentful\\Core\\Api\\LinkResolverInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\Api\\LinkResolverInterface", "fromLink": "Contentful/Core/Api/LinkResolverInterface.html", "link": "Contentful/Core/Api/LinkResolverInterface.html#method_resolveLink", "name": "Contentful\\Core\\Api\\LinkResolverInterface::resolveLink", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Core\\Api", "fromLink": "Contentful/Core/Api.html", "link": "Contentful/Core/Api/Location.html", "name": "Contentful\\Core\\Api\\Location", "doc": "&quot;The Location class encodes a geographic Location based on latitude and longitude.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\Api\\Location", "fromLink": "Contentful/Core/Api/Location.html", "link": "Contentful/Core/Api/Location.html#method___construct", "name": "Contentful\\Core\\Api\\Location::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\Location", "fromLink": "Contentful/Core/Api/Location.html", "link": "Contentful/Core/Api/Location.html#method_getLatitude", "name": "Contentful\\Core\\Api\\Location::getLatitude", "doc": "&quot;Returns the latitude.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\Location", "fromLink": "Contentful/Core/Api/Location.html", "link": "Contentful/Core/Api/Location.html#method_getLongitude", "name": "Contentful\\Core\\Api\\Location::getLongitude", "doc": "&quot;Returns the longitude.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\Location", "fromLink": "Contentful/Core/Api/Location.html", "link": "Contentful/Core/Api/Location.html#method_jsonSerialize", "name": "Contentful\\Core\\Api\\Location::jsonSerialize", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\Location", "fromLink": "Contentful/Core/Api/Location.html", "link": "Contentful/Core/Api/Location.html#method_queryStringFormatted", "name": "Contentful\\Core\\Api\\Location::queryStringFormatted", "doc": "&quot;Format the encoded value as required by the Contentful API.&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Core\\Api", "fromLink": "Contentful/Core/Api.html", "link": "Contentful/Core/Api/Message.html", "name": "Contentful\\Core\\Api\\Message", "doc": "&quot;Message class.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\Api\\Message", "fromLink": "Contentful/Core/Api/Message.html", "link": "Contentful/Core/Api/Message.html#method___construct", "name": "Contentful\\Core\\Api\\Message::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\Message", "fromLink": "Contentful/Core/Api/Message.html", "link": "Contentful/Core/Api/Message.html#method_createFromString", "name": "Contentful\\Core\\Api\\Message::createFromString", "doc": "&quot;Creates a new instance of the class from a JSON string.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\Message", "fromLink": "Contentful/Core/Api/Message.html", "link": "Contentful/Core/Api/Message.html#method_getLogLevel", "name": "Contentful\\Core\\Api\\Message::getLogLevel", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\Message", "fromLink": "Contentful/Core/Api/Message.html", "link": "Contentful/Core/Api/Message.html#method_getApi", "name": "Contentful\\Core\\Api\\Message::getApi", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\Message", "fromLink": "Contentful/Core/Api/Message.html", "link": "Contentful/Core/Api/Message.html#method_getRequest", "name": "Contentful\\Core\\Api\\Message::getRequest", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\Message", "fromLink": "Contentful/Core/Api/Message.html", "link": "Contentful/Core/Api/Message.html#method_getException", "name": "Contentful\\Core\\Api\\Message::getException", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\Message", "fromLink": "Contentful/Core/Api/Message.html", "link": "Contentful/Core/Api/Message.html#method_getDuration", "name": "Contentful\\Core\\Api\\Message::getDuration", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\Message", "fromLink": "Contentful/Core/Api/Message.html", "link": "Contentful/Core/Api/Message.html#method_getResponse", "name": "Contentful\\Core\\Api\\Message::getResponse", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\Message", "fromLink": "Contentful/Core/Api/Message.html", "link": "Contentful/Core/Api/Message.html#method_isError", "name": "Contentful\\Core\\Api\\Message::isError", "doc": "&quot;True if the requests threw an error.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\Message", "fromLink": "Contentful/Core/Api/Message.html", "link": "Contentful/Core/Api/Message.html#method_jsonSerialize", "name": "Contentful\\Core\\Api\\Message::jsonSerialize", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\Message", "fromLink": "Contentful/Core/Api/Message.html", "link": "Contentful/Core/Api/Message.html#method_serialize", "name": "Contentful\\Core\\Api\\Message::serialize", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\Message", "fromLink": "Contentful/Core/Api/Message.html", "link": "Contentful/Core/Api/Message.html#method_unserialize", "name": "Contentful\\Core\\Api\\Message::unserialize", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\Message", "fromLink": "Contentful/Core/Api/Message.html", "link": "Contentful/Core/Api/Message.html#method_asString", "name": "Contentful\\Core\\Api\\Message::asString", "doc": "&quot;Returns a string representation of the current message.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\Message", "fromLink": "Contentful/Core/Api/Message.html", "link": "Contentful/Core/Api/Message.html#method___toString", "name": "Contentful\\Core\\Api\\Message::__toString", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Core\\Api", "fromLink": "Contentful/Core/Api.html", "link": "Contentful/Core/Api/RequestBuilder.html", "name": "Contentful\\Core\\Api\\RequestBuilder", "doc": "&quot;RequestBuilder class.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\Api\\RequestBuilder", "fromLink": "Contentful/Core/Api/RequestBuilder.html", "link": "Contentful/Core/Api/RequestBuilder.html#method___construct", "name": "Contentful\\Core\\Api\\RequestBuilder::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\RequestBuilder", "fromLink": "Contentful/Core/Api/RequestBuilder.html", "link": "Contentful/Core/Api/RequestBuilder.html#method_build", "name": "Contentful\\Core\\Api\\RequestBuilder::build", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Core\\Api", "fromLink": "Contentful/Core/Api.html", "link": "Contentful/Core/Api/UserAgentGenerator.html", "name": "Contentful\\Core\\Api\\UserAgentGenerator", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\Api\\UserAgentGenerator", "fromLink": "Contentful/Core/Api/UserAgentGenerator.html", "link": "Contentful/Core/Api/UserAgentGenerator.html#method___construct", "name": "Contentful\\Core\\Api\\UserAgentGenerator::__construct", "doc": "&quot;UserAgentGenerator constructor.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\UserAgentGenerator", "fromLink": "Contentful/Core/Api/UserAgentGenerator.html", "link": "Contentful/Core/Api/UserAgentGenerator.html#method_setApplication", "name": "Contentful\\Core\\Api\\UserAgentGenerator::setApplication", "doc": "&quot;Set the application name and version. The values are used as part of the X-Contentful-User-Agent header.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\UserAgentGenerator", "fromLink": "Contentful/Core/Api/UserAgentGenerator.html", "link": "Contentful/Core/Api/UserAgentGenerator.html#method_setIntegration", "name": "Contentful\\Core\\Api\\UserAgentGenerator::setIntegration", "doc": "&quot;Set the application name and version. The values are used as part of the X-Contentful-User-Agent header.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Api\\UserAgentGenerator", "fromLink": "Contentful/Core/Api/UserAgentGenerator.html", "link": "Contentful/Core/Api/UserAgentGenerator.html#method_getUserAgent", "name": "Contentful\\Core\\Api\\UserAgentGenerator::getUserAgent", "doc": "&quot;Returns the value of the User-Agent header for any requests made to Contentful.&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Core\\Exception", "fromLink": "Contentful/Core/Exception.html", "link": "Contentful/Core/Exception/AccessTokenInvalidException.html", "name": "Contentful\\Core\\Exception\\AccessTokenInvalidException", "doc": "&quot;An AccessTokenInvalidException gets thrown when the access token was not accepted by the API.&quot;"},
                    
            {"type": "Class", "fromName": "Contentful\\Core\\Exception", "fromLink": "Contentful/Core/Exception.html", "link": "Contentful/Core/Exception/BadRequestException.html", "name": "Contentful\\Core\\Exception\\BadRequestException", "doc": "&quot;A BadRequestException indicates that there was a problem with the request.&quot;"},
                    
            {"type": "Class", "fromName": "Contentful\\Core\\Exception", "fromLink": "Contentful/Core/Exception.html", "link": "Contentful/Core/Exception/InvalidQueryException.html", "name": "Contentful\\Core\\Exception\\InvalidQueryException", "doc": "&quot;An InvalidQueryException is thrown when the query could not be executed. The most common case is setting a non-existing\ncontent type or field name.&quot;"},
                    
            {"type": "Class", "fromName": "Contentful\\Core\\Exception", "fromLink": "Contentful/Core/Exception.html", "link": "Contentful/Core/Exception/NotFoundException.html", "name": "Contentful\\Core\\Exception\\NotFoundException", "doc": "&quot;A NotFoundException indicates that the desired resource could not be found on the server.&quot;"},
                    
            {"type": "Class", "fromName": "Contentful\\Core\\Exception", "fromLink": "Contentful/Core/Exception.html", "link": "Contentful/Core/Exception/RateLimitExceededException.html", "name": "Contentful\\Core\\Exception\\RateLimitExceededException", "doc": "&quot;A RateLimitExceededException is thrown when there have been too many requests.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\Exception\\RateLimitExceededException", "fromLink": "Contentful/Core/Exception/RateLimitExceededException.html", "link": "Contentful/Core/Exception/RateLimitExceededException.html#method___construct", "name": "Contentful\\Core\\Exception\\RateLimitExceededException::__construct", "doc": "&quot;RateLimitExceededException constructor.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Exception\\RateLimitExceededException", "fromLink": "Contentful/Core/Exception/RateLimitExceededException.html", "link": "Contentful/Core/Exception/RateLimitExceededException.html#method_getRateLimitReset", "name": "Contentful\\Core\\Exception\\RateLimitExceededException::getRateLimitReset", "doc": "&quot;Returns the number of seconds until the rate limit expires.&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Core\\File", "fromLink": "Contentful/Core/File.html", "link": "Contentful/Core/File/File.html", "name": "Contentful\\Core\\File\\File", "doc": "&quot;File class.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\File\\File", "fromLink": "Contentful/Core/File/File.html", "link": "Contentful/Core/File/File.html#method___construct", "name": "Contentful\\Core\\File\\File::__construct", "doc": "&quot;File constructor.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\File\\File", "fromLink": "Contentful/Core/File/File.html", "link": "Contentful/Core/File/File.html#method_getFileName", "name": "Contentful\\Core\\File\\File::getFileName", "doc": "&quot;The name of this file.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\File\\File", "fromLink": "Contentful/Core/File/File.html", "link": "Contentful/Core/File/File.html#method_getContentType", "name": "Contentful\\Core\\File\\File::getContentType", "doc": "&quot;The Content- (or MIME-)Type of this file.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\File\\File", "fromLink": "Contentful/Core/File/File.html", "link": "Contentful/Core/File/File.html#method_getUrl", "name": "Contentful\\Core\\File\\File::getUrl", "doc": "&quot;The URL where this file can be retrieved.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\File\\File", "fromLink": "Contentful/Core/File/File.html", "link": "Contentful/Core/File/File.html#method_getSize", "name": "Contentful\\Core\\File\\File::getSize", "doc": "&quot;The size in bytes of this file.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\File\\File", "fromLink": "Contentful/Core/File/File.html", "link": "Contentful/Core/File/File.html#method_jsonSerialize", "name": "Contentful\\Core\\File\\File::jsonSerialize", "doc": "&quot;{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Core\\File", "fromLink": "Contentful/Core/File.html", "link": "Contentful/Core/File/FileInterface.html", "name": "Contentful\\Core\\File\\FileInterface", "doc": "&quot;FileInterface.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\File\\FileInterface", "fromLink": "Contentful/Core/File/FileInterface.html", "link": "Contentful/Core/File/FileInterface.html#method_getFileName", "name": "Contentful\\Core\\File\\FileInterface::getFileName", "doc": "&quot;The name of this file.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\File\\FileInterface", "fromLink": "Contentful/Core/File/FileInterface.html", "link": "Contentful/Core/File/FileInterface.html#method_getContentType", "name": "Contentful\\Core\\File\\FileInterface::getContentType", "doc": "&quot;The Content- (or MIME-)Type of this file.&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Core\\File", "fromLink": "Contentful/Core/File.html", "link": "Contentful/Core/File/ImageFile.html", "name": "Contentful\\Core\\File\\ImageFile", "doc": "&quot;ImageFile class.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\File\\ImageFile", "fromLink": "Contentful/Core/File/ImageFile.html", "link": "Contentful/Core/File/ImageFile.html#method___construct", "name": "Contentful\\Core\\File\\ImageFile::__construct", "doc": "&quot;ImageFile constructor.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\File\\ImageFile", "fromLink": "Contentful/Core/File/ImageFile.html", "link": "Contentful/Core/File/ImageFile.html#method_getWidth", "name": "Contentful\\Core\\File\\ImageFile::getWidth", "doc": "&quot;Returns the width of the image.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\File\\ImageFile", "fromLink": "Contentful/Core/File/ImageFile.html", "link": "Contentful/Core/File/ImageFile.html#method_getHeight", "name": "Contentful\\Core\\File\\ImageFile::getHeight", "doc": "&quot;Returns the height of the image.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\File\\ImageFile", "fromLink": "Contentful/Core/File/ImageFile.html", "link": "Contentful/Core/File/ImageFile.html#method_getUrl", "name": "Contentful\\Core\\File\\ImageFile::getUrl", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\File\\ImageFile", "fromLink": "Contentful/Core/File/ImageFile.html", "link": "Contentful/Core/File/ImageFile.html#method_jsonSerialize", "name": "Contentful\\Core\\File\\ImageFile::jsonSerialize", "doc": "&quot;{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Core\\File", "fromLink": "Contentful/Core/File.html", "link": "Contentful/Core/File/ImageOptions.html", "name": "Contentful\\Core\\File\\ImageOptions", "doc": "&quot;ImageOptions class.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\File\\ImageOptions", "fromLink": "Contentful/Core/File/ImageOptions.html", "link": "Contentful/Core/File/ImageOptions.html#method_getQueryString", "name": "Contentful\\Core\\File\\ImageOptions::getQueryString", "doc": "&quot;The urlencoded query string for these options.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\File\\ImageOptions", "fromLink": "Contentful/Core/File/ImageOptions.html", "link": "Contentful/Core/File/ImageOptions.html#method_setWidth", "name": "Contentful\\Core\\File\\ImageOptions::setWidth", "doc": "&quot;Set the width of the image.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\File\\ImageOptions", "fromLink": "Contentful/Core/File/ImageOptions.html", "link": "Contentful/Core/File/ImageOptions.html#method_setHeight", "name": "Contentful\\Core\\File\\ImageOptions::setHeight", "doc": "&quot;Set the height of the image.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\File\\ImageOptions", "fromLink": "Contentful/Core/File/ImageOptions.html", "link": "Contentful/Core/File/ImageOptions.html#method_setFormat", "name": "Contentful\\Core\\File\\ImageOptions::setFormat", "doc": "&quot;Set the format of the image. Valid values are \&quot;png\&quot; and \&quot;jpg\&quot;.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\File\\ImageOptions", "fromLink": "Contentful/Core/File/ImageOptions.html", "link": "Contentful/Core/File/ImageOptions.html#method_setQuality", "name": "Contentful\\Core\\File\\ImageOptions::setQuality", "doc": "&quot;Quality of the JPEG encoded image.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\File\\ImageOptions", "fromLink": "Contentful/Core/File/ImageOptions.html", "link": "Contentful/Core/File/ImageOptions.html#method_setProgressive", "name": "Contentful\\Core\\File\\ImageOptions::setProgressive", "doc": "&quot;Set to true to load the image as a progressive JPEG.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\File\\ImageOptions", "fromLink": "Contentful/Core/File/ImageOptions.html", "link": "Contentful/Core/File/ImageOptions.html#method_setResizeFit", "name": "Contentful\\Core\\File\\ImageOptions::setResizeFit", "doc": "&quot;Change the behavior when resizing the image.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\File\\ImageOptions", "fromLink": "Contentful/Core/File/ImageOptions.html", "link": "Contentful/Core/File/ImageOptions.html#method_setResizeFocus", "name": "Contentful\\Core\\File\\ImageOptions::setResizeFocus", "doc": "&quot;Set the focus area when the resize fit is set to &#039;thumb&#039;.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\File\\ImageOptions", "fromLink": "Contentful/Core/File/ImageOptions.html", "link": "Contentful/Core/File/ImageOptions.html#method_setRadius", "name": "Contentful\\Core\\File\\ImageOptions::setRadius", "doc": "&quot;Add rounded corners to your image or crop to a circle\/ellipsis.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\File\\ImageOptions", "fromLink": "Contentful/Core/File/ImageOptions.html", "link": "Contentful/Core/File/ImageOptions.html#method_setBackgroundColor", "name": "Contentful\\Core\\File\\ImageOptions::setBackgroundColor", "doc": "&quot;Background color, relevant if the resize fit type &#039;pad&#039; is used.&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Core\\File", "fromLink": "Contentful/Core/File.html", "link": "Contentful/Core/File/LocalUploadFile.html", "name": "Contentful\\Core\\File\\LocalUploadFile", "doc": "&quot;LocalUploadFile class.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\File\\LocalUploadFile", "fromLink": "Contentful/Core/File/LocalUploadFile.html", "link": "Contentful/Core/File/LocalUploadFile.html#method___construct", "name": "Contentful\\Core\\File\\LocalUploadFile::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\File\\LocalUploadFile", "fromLink": "Contentful/Core/File/LocalUploadFile.html", "link": "Contentful/Core/File/LocalUploadFile.html#method_getFileName", "name": "Contentful\\Core\\File\\LocalUploadFile::getFileName", "doc": "&quot;The name of this file.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\File\\LocalUploadFile", "fromLink": "Contentful/Core/File/LocalUploadFile.html", "link": "Contentful/Core/File/LocalUploadFile.html#method_getContentType", "name": "Contentful\\Core\\File\\LocalUploadFile::getContentType", "doc": "&quot;The Content- (or MIME-)Type of this file.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\File\\LocalUploadFile", "fromLink": "Contentful/Core/File/LocalUploadFile.html", "link": "Contentful/Core/File/LocalUploadFile.html#method_getUploadFrom", "name": "Contentful\\Core\\File\\LocalUploadFile::getUploadFrom", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\File\\LocalUploadFile", "fromLink": "Contentful/Core/File/LocalUploadFile.html", "link": "Contentful/Core/File/LocalUploadFile.html#method_jsonSerialize", "name": "Contentful\\Core\\File\\LocalUploadFile::jsonSerialize", "doc": "&quot;{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Core\\File", "fromLink": "Contentful/Core/File.html", "link": "Contentful/Core/File/RemoteUploadFile.html", "name": "Contentful\\Core\\File\\RemoteUploadFile", "doc": "&quot;RemoteUploadFile class.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\File\\RemoteUploadFile", "fromLink": "Contentful/Core/File/RemoteUploadFile.html", "link": "Contentful/Core/File/RemoteUploadFile.html#method___construct", "name": "Contentful\\Core\\File\\RemoteUploadFile::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\File\\RemoteUploadFile", "fromLink": "Contentful/Core/File/RemoteUploadFile.html", "link": "Contentful/Core/File/RemoteUploadFile.html#method_getFileName", "name": "Contentful\\Core\\File\\RemoteUploadFile::getFileName", "doc": "&quot;The name of this file.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\File\\RemoteUploadFile", "fromLink": "Contentful/Core/File/RemoteUploadFile.html", "link": "Contentful/Core/File/RemoteUploadFile.html#method_getContentType", "name": "Contentful\\Core\\File\\RemoteUploadFile::getContentType", "doc": "&quot;The Content- (or MIME-)Type of this file.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\File\\RemoteUploadFile", "fromLink": "Contentful/Core/File/RemoteUploadFile.html", "link": "Contentful/Core/File/RemoteUploadFile.html#method_getUpload", "name": "Contentful\\Core\\File\\RemoteUploadFile::getUpload", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\File\\RemoteUploadFile", "fromLink": "Contentful/Core/File/RemoteUploadFile.html", "link": "Contentful/Core/File/RemoteUploadFile.html#method_jsonSerialize", "name": "Contentful\\Core\\File\\RemoteUploadFile::jsonSerialize", "doc": "&quot;{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Core\\File", "fromLink": "Contentful/Core/File.html", "link": "Contentful/Core/File/UnprocessedFileInterface.html", "name": "Contentful\\Core\\File\\UnprocessedFileInterface", "doc": "&quot;UnprocessedFileInterface.&quot;"},
                    
            {"type": "Class", "fromName": "Contentful\\Core\\Log", "fromLink": "Contentful/Core/Log.html", "link": "Contentful/Core/Log/NullLogger.html", "name": "Contentful\\Core\\Log\\NullLogger", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\Log\\NullLogger", "fromLink": "Contentful/Core/Log/NullLogger.html", "link": "Contentful/Core/Log/NullLogger.html#method_emergency", "name": "Contentful\\Core\\Log\\NullLogger::emergency", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Log\\NullLogger", "fromLink": "Contentful/Core/Log/NullLogger.html", "link": "Contentful/Core/Log/NullLogger.html#method_alert", "name": "Contentful\\Core\\Log\\NullLogger::alert", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Log\\NullLogger", "fromLink": "Contentful/Core/Log/NullLogger.html", "link": "Contentful/Core/Log/NullLogger.html#method_critical", "name": "Contentful\\Core\\Log\\NullLogger::critical", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Log\\NullLogger", "fromLink": "Contentful/Core/Log/NullLogger.html", "link": "Contentful/Core/Log/NullLogger.html#method_error", "name": "Contentful\\Core\\Log\\NullLogger::error", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Log\\NullLogger", "fromLink": "Contentful/Core/Log/NullLogger.html", "link": "Contentful/Core/Log/NullLogger.html#method_warning", "name": "Contentful\\Core\\Log\\NullLogger::warning", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Log\\NullLogger", "fromLink": "Contentful/Core/Log/NullLogger.html", "link": "Contentful/Core/Log/NullLogger.html#method_notice", "name": "Contentful\\Core\\Log\\NullLogger::notice", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Log\\NullLogger", "fromLink": "Contentful/Core/Log/NullLogger.html", "link": "Contentful/Core/Log/NullLogger.html#method_info", "name": "Contentful\\Core\\Log\\NullLogger::info", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Log\\NullLogger", "fromLink": "Contentful/Core/Log/NullLogger.html", "link": "Contentful/Core/Log/NullLogger.html#method_debug", "name": "Contentful\\Core\\Log\\NullLogger::debug", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Log\\NullLogger", "fromLink": "Contentful/Core/Log/NullLogger.html", "link": "Contentful/Core/Log/NullLogger.html#method_log", "name": "Contentful\\Core\\Log\\NullLogger::log", "doc": "&quot;{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Core\\Log", "fromLink": "Contentful/Core/Log.html", "link": "Contentful/Core/Log/Timer.html", "name": "Contentful\\Core\\Log\\Timer", "doc": "&quot;Timer class.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\Log\\Timer", "fromLink": "Contentful/Core/Log/Timer.html", "link": "Contentful/Core/Log/Timer.html#method_start", "name": "Contentful\\Core\\Log\\Timer::start", "doc": "&quot;Starts the timer.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Log\\Timer", "fromLink": "Contentful/Core/Log/Timer.html", "link": "Contentful/Core/Log/Timer.html#method_stop", "name": "Contentful\\Core\\Log\\Timer::stop", "doc": "&quot;Stops the timer.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Log\\Timer", "fromLink": "Contentful/Core/Log/Timer.html", "link": "Contentful/Core/Log/Timer.html#method_isRunning", "name": "Contentful\\Core\\Log\\Timer::isRunning", "doc": "&quot;Returns true if the timer is currently running.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Log\\Timer", "fromLink": "Contentful/Core/Log/Timer.html", "link": "Contentful/Core/Log/Timer.html#method_getDuration", "name": "Contentful\\Core\\Log\\Timer::getDuration", "doc": "&quot;Returns the time (in seconds) the timer ran.&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Core\\ResourceBuilder", "fromLink": "Contentful/Core/ResourceBuilder.html", "link": "Contentful/Core/ResourceBuilder/BaseResourceBuilder.html", "name": "Contentful\\Core\\ResourceBuilder\\BaseResourceBuilder", "doc": "&quot;BaseResourceBuilder class.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\ResourceBuilder\\BaseResourceBuilder", "fromLink": "Contentful/Core/ResourceBuilder/BaseResourceBuilder.html", "link": "Contentful/Core/ResourceBuilder/BaseResourceBuilder.html#method___construct", "name": "Contentful\\Core\\ResourceBuilder\\BaseResourceBuilder::__construct", "doc": "&quot;ResourceBuilder constructor.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\ResourceBuilder\\BaseResourceBuilder", "fromLink": "Contentful/Core/ResourceBuilder/BaseResourceBuilder.html", "link": "Contentful/Core/ResourceBuilder/BaseResourceBuilder.html#method_build", "name": "Contentful\\Core\\ResourceBuilder\\BaseResourceBuilder::build", "doc": "&quot;Creates or updates an object using given data.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\ResourceBuilder\\BaseResourceBuilder", "fromLink": "Contentful/Core/ResourceBuilder/BaseResourceBuilder.html", "link": "Contentful/Core/ResourceBuilder/BaseResourceBuilder.html#method_getMapper", "name": "Contentful\\Core\\ResourceBuilder\\BaseResourceBuilder::getMapper", "doc": "&quot;Returns the mapper object appropriate for the given data.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\ResourceBuilder\\BaseResourceBuilder", "fromLink": "Contentful/Core/ResourceBuilder/BaseResourceBuilder.html", "link": "Contentful/Core/ResourceBuilder/BaseResourceBuilder.html#method_setDataMapperMatcher", "name": "Contentful\\Core\\ResourceBuilder\\BaseResourceBuilder::setDataMapperMatcher", "doc": "&quot;Sets a callable which will receive raw data (the JSON payload\nconverted to a PHP array) and will determine the FQCN\nfor appropriate mapping of that resource.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\ResourceBuilder\\BaseResourceBuilder", "fromLink": "Contentful/Core/ResourceBuilder/BaseResourceBuilder.html", "link": "Contentful/Core/ResourceBuilder/BaseResourceBuilder.html#method_getMapperNamespace", "name": "Contentful\\Core\\ResourceBuilder\\BaseResourceBuilder::getMapperNamespace", "doc": "&quot;Returns the namespace where mapper classes are located.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\ResourceBuilder\\BaseResourceBuilder", "fromLink": "Contentful/Core/ResourceBuilder/BaseResourceBuilder.html", "link": "Contentful/Core/ResourceBuilder/BaseResourceBuilder.html#method_createMapper", "name": "Contentful\\Core\\ResourceBuilder\\BaseResourceBuilder::createMapper", "doc": "&quot;Abstract function for instantiating a mapper.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\ResourceBuilder\\BaseResourceBuilder", "fromLink": "Contentful/Core/ResourceBuilder/BaseResourceBuilder.html", "link": "Contentful/Core/ResourceBuilder/BaseResourceBuilder.html#method_getSystemType", "name": "Contentful\\Core\\ResourceBuilder\\BaseResourceBuilder::getSystemType", "doc": "&quot;Determines the SDK resource type given the API system type.&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Core\\ResourceBuilder", "fromLink": "Contentful/Core/ResourceBuilder.html", "link": "Contentful/Core/ResourceBuilder/MapperInterface.html", "name": "Contentful\\Core\\ResourceBuilder\\MapperInterface", "doc": "&quot;MapperInterface.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\ResourceBuilder\\MapperInterface", "fromLink": "Contentful/Core/ResourceBuilder/MapperInterface.html", "link": "Contentful/Core/ResourceBuilder/MapperInterface.html#method_map", "name": "Contentful\\Core\\ResourceBuilder\\MapperInterface::map", "doc": "&quot;Maps the given data to a resource.&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Core\\ResourceBuilder", "fromLink": "Contentful/Core/ResourceBuilder.html", "link": "Contentful/Core/ResourceBuilder/ObjectHydrator.html", "name": "Contentful\\Core\\ResourceBuilder\\ObjectHydrator", "doc": "&quot;Class ObjectHydrator.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\ResourceBuilder\\ObjectHydrator", "fromLink": "Contentful/Core/ResourceBuilder/ObjectHydrator.html", "link": "Contentful/Core/ResourceBuilder/ObjectHydrator.html#method_hydrate", "name": "Contentful\\Core\\ResourceBuilder\\ObjectHydrator::hydrate", "doc": "&quot;If given a class name as target, the hydrator will create an instance of that class,\nbut skipping the constructor. The hydrator will then update the internal properties,\naccording to the keys defined in the $data parameter.&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Core\\ResourceBuilder", "fromLink": "Contentful/Core/ResourceBuilder.html", "link": "Contentful/Core/ResourceBuilder/ResourceBuilderInterface.html", "name": "Contentful\\Core\\ResourceBuilder\\ResourceBuilderInterface", "doc": "&quot;ResourceBuilderInterface.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\ResourceBuilder\\ResourceBuilderInterface", "fromLink": "Contentful/Core/ResourceBuilder/ResourceBuilderInterface.html", "link": "Contentful/Core/ResourceBuilder/ResourceBuilderInterface.html#method_build", "name": "Contentful\\Core\\ResourceBuilder\\ResourceBuilderInterface::build", "doc": "&quot;Creates or updates an object using given data.&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Core\\Resource", "fromLink": "Contentful/Core/Resource.html", "link": "Contentful/Core/Resource/ResourceArray.html", "name": "Contentful\\Core\\Resource\\ResourceArray", "doc": "&quot;A ResourceArray holds the response of an API request if more than one resource has been requested.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\Resource\\ResourceArray", "fromLink": "Contentful/Core/Resource/ResourceArray.html", "link": "Contentful/Core/Resource/ResourceArray.html#method___construct", "name": "Contentful\\Core\\Resource\\ResourceArray::__construct", "doc": "&quot;ResourceArray constructor.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Resource\\ResourceArray", "fromLink": "Contentful/Core/Resource/ResourceArray.html", "link": "Contentful/Core/Resource/ResourceArray.html#method_getTotal", "name": "Contentful\\Core\\Resource\\ResourceArray::getTotal", "doc": "&quot;Returns the total amount of resources matching the filter.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Resource\\ResourceArray", "fromLink": "Contentful/Core/Resource/ResourceArray.html", "link": "Contentful/Core/Resource/ResourceArray.html#method_getLimit", "name": "Contentful\\Core\\Resource\\ResourceArray::getLimit", "doc": "&quot;The limit used when retrieving this ResourceArray.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Resource\\ResourceArray", "fromLink": "Contentful/Core/Resource/ResourceArray.html", "link": "Contentful/Core/Resource/ResourceArray.html#method_getSkip", "name": "Contentful\\Core\\Resource\\ResourceArray::getSkip", "doc": "&quot;The number of skipped resources when retrieving this  ResourceArray.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Resource\\ResourceArray", "fromLink": "Contentful/Core/Resource/ResourceArray.html", "link": "Contentful/Core/Resource/ResourceArray.html#method_getItems", "name": "Contentful\\Core\\Resource\\ResourceArray::getItems", "doc": "&quot;Get the returned values as a PHP array.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Resource\\ResourceArray", "fromLink": "Contentful/Core/Resource/ResourceArray.html", "link": "Contentful/Core/Resource/ResourceArray.html#method_jsonSerialize", "name": "Contentful\\Core\\Resource\\ResourceArray::jsonSerialize", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Resource\\ResourceArray", "fromLink": "Contentful/Core/Resource/ResourceArray.html", "link": "Contentful/Core/Resource/ResourceArray.html#method_count", "name": "Contentful\\Core\\Resource\\ResourceArray::count", "doc": "&quot;Returns the number of resources in this array.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Resource\\ResourceArray", "fromLink": "Contentful/Core/Resource/ResourceArray.html", "link": "Contentful/Core/Resource/ResourceArray.html#method_getIterator", "name": "Contentful\\Core\\Resource\\ResourceArray::getIterator", "doc": "&quot;Returns a \\Traversable to allow iterating the ResourceArray.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Resource\\ResourceArray", "fromLink": "Contentful/Core/Resource/ResourceArray.html", "link": "Contentful/Core/Resource/ResourceArray.html#method_offsetExists", "name": "Contentful\\Core\\Resource\\ResourceArray::offsetExists", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Resource\\ResourceArray", "fromLink": "Contentful/Core/Resource/ResourceArray.html", "link": "Contentful/Core/Resource/ResourceArray.html#method_offsetGet", "name": "Contentful\\Core\\Resource\\ResourceArray::offsetGet", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Resource\\ResourceArray", "fromLink": "Contentful/Core/Resource/ResourceArray.html", "link": "Contentful/Core/Resource/ResourceArray.html#method_offsetSet", "name": "Contentful\\Core\\Resource\\ResourceArray::offsetSet", "doc": "&quot;This method is not implemented since a ResourceArray is read-only.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Resource\\ResourceArray", "fromLink": "Contentful/Core/Resource/ResourceArray.html", "link": "Contentful/Core/Resource/ResourceArray.html#method_offsetUnset", "name": "Contentful\\Core\\Resource\\ResourceArray::offsetUnset", "doc": "&quot;This method is not implemented since a ResourceArray is read-only.&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Core\\Resource", "fromLink": "Contentful/Core/Resource.html", "link": "Contentful/Core/Resource/ResourceInterface.html", "name": "Contentful\\Core\\Resource\\ResourceInterface", "doc": "&quot;ResourceInterface.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\Resource\\ResourceInterface", "fromLink": "Contentful/Core/Resource/ResourceInterface.html", "link": "Contentful/Core/Resource/ResourceInterface.html#method_getSystemProperties", "name": "Contentful\\Core\\Resource\\ResourceInterface::getSystemProperties", "doc": "&quot;Returns the resource&#039;s system properties,\ndefined in the object \&quot;sys\&quot; in Contentful&#039;s responses.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Resource\\ResourceInterface", "fromLink": "Contentful/Core/Resource/ResourceInterface.html", "link": "Contentful/Core/Resource/ResourceInterface.html#method_asLink", "name": "Contentful\\Core\\Resource\\ResourceInterface::asLink", "doc": "&quot;Creates a Link representation of the current resource.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Resource\\ResourceInterface", "fromLink": "Contentful/Core/Resource/ResourceInterface.html", "link": "Contentful/Core/Resource/ResourceInterface.html#method_getId", "name": "Contentful\\Core\\Resource\\ResourceInterface::getId", "doc": "&quot;Shortcut for retrieving the resource ID\nfrom the system properties object.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Resource\\ResourceInterface", "fromLink": "Contentful/Core/Resource/ResourceInterface.html", "link": "Contentful/Core/Resource/ResourceInterface.html#method_getType", "name": "Contentful\\Core\\Resource\\ResourceInterface::getType", "doc": "&quot;Shortcut for retrieving the resource type\nfrom the system properties object.&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Core\\Resource", "fromLink": "Contentful/Core/Resource.html", "link": "Contentful/Core/Resource/SystemPropertiesInterface.html", "name": "Contentful\\Core\\Resource\\SystemPropertiesInterface", "doc": "&quot;SystemPropertiesInterface.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Core\\Resource\\SystemPropertiesInterface", "fromLink": "Contentful/Core/Resource/SystemPropertiesInterface.html", "link": "Contentful/Core/Resource/SystemPropertiesInterface.html#method___construct", "name": "Contentful\\Core\\Resource\\SystemPropertiesInterface::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Resource\\SystemPropertiesInterface", "fromLink": "Contentful/Core/Resource/SystemPropertiesInterface.html", "link": "Contentful/Core/Resource/SystemPropertiesInterface.html#method_getId", "name": "Contentful\\Core\\Resource\\SystemPropertiesInterface::getId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Core\\Resource\\SystemPropertiesInterface", "fromLink": "Contentful/Core/Resource/SystemPropertiesInterface.html", "link": "Contentful/Core/Resource/SystemPropertiesInterface.html#method_getType", "name": "Contentful\\Core\\Resource\\SystemPropertiesInterface::getType", "doc": "&quot;&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});

