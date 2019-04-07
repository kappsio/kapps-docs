# Markdown

### Image
```
![my logo](/logo.png)
```
![my logo](/logo.png)


### LInk
```
[kapps.io](http://kapps.io)
<http:://kreativan.net>    
<kreativan@outlook.com>
```
[kapps.io](http://kapps.io)    
<http:://kreativan.net>    
<kreativan@outlook.com>


### Blockquotes
```
> Lorem ipsum dolor sit amet   
>   
> Lorem ipsum dolor sit amet, consectetur adipiscing 
```
> Lorem ipsum dolor sit amet
>
> Lorem ipsum dolor sit amet, consectetur adipiscing

## Folder Structure
```
├── Folder 1
├── Folder 2
    ├── SubFolder 1
    ├── SubFolder 2
    ├── SubFolder 3
├── Folder 3

```



## Code & Syntax Highlighting

```php
if($session->get("swal")) {
    echo swalMini($session->get("message"), $session->get("swal"));
    $session->remove("swal");
    $session->remove("title");
    $session->remove("message");
}

```

## GitHub-Style Tables

```md
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```


| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


## Emoji :tada: 
```
:tada: 
:100:
:computer:
```
:tada: 
:100:
:+1:
:-1:
:boom:
:email:
:clipboard:
:file_folder:
...[Full emoji list](https://gist.github.com/rxaviers/7360908)

## Table of Contents
```
[[toc]]
or

<TOC/>
```
<TOC/>



## Custom Containers

```
::: tip TIP
This is a tip
:::

::: warning WARNING
This is a warning
:::

::: danger DANGER
This is a dangerous warning
:::
```

::: tip TIP
This is a tip
:::

::: warning WARNING
This is a warning
:::

::: danger DANGER
This is a dangerous warning
:::