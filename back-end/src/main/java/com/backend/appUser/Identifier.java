package com.backend.appUser;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Embeddable;
import javax.persistence.Entity;

@Embeddable
@Getter
@Setter
public class Identifier {
    private String userName;
    private String hash;
}