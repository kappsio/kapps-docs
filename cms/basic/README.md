# Basic

## Item 1

```php
if($session->get("swal")) {
    echo swalMini($session->get("message"), $session->get("swal"));
    $session->remove("swal");
    $session->remove("title");
    $session->remove("message");
}

```

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## Item 2


## Item 3