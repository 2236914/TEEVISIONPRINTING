package com.teevision.ecommerce_backend.entities.tag;

import com.teevision.ecommerce_backend.entities.color.Color;
import com.teevision.ecommerce_backend.entities.joins.colorTag.ColorTag;
import com.teevision.ecommerce_backend.entities.joins.productTag.ProductTag;
import com.teevision.ecommerce_backend.entities.product.Product;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

import java.util.Collection;
@Data
@Entity
@Table(name = "tags")
public class Tag {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "tag_name", nullable = false, unique = true)
  private String tagName;

  @OneToMany(mappedBy = "tag", fetch= FetchType.LAZY)
  private Collection<ProductTag> products;

  @OneToMany(mappedBy = "tag", fetch= FetchType.LAZY)
  private Collection<ColorTag> colors;
}
