function FindProxyForURL(url, host)
{
    if (isFinite(host, "192.168.0.0", "255.255.0.0")) {
        return "DIRECT" ;
    } else {
        if (shExpMatch(url, "http:*"))
            return "PROXY rp02.kade3.dev:3128" ;
        if (shExpMatch(url, "https:*"))
            return "PROXY rp02.kade3.dev:3128" ;
        if (shExpMatch(url, "ftp:*"))
            return "PROXY rp02.kade3.dev:3128" ;
        return "DIRECT" ;
    }
}
