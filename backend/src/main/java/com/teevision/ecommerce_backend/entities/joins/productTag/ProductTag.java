package com.teevision.ecommerce_backend.entities.joins.productTag;

import com.teevision.ecommerce_backend.entities.product.Product;
import com.teevision.ecommerce_backend.entities.tag.Tag;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@RequiredArgsConstructor
@Entity
@Table(name = "product_tags")
public class ProductTag {

  @EmbeddedId
  private ProductTagId id;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "product_id")
  @MapsId("productId")
  private Product product;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "tag_id")
  @MapsId("tagId")
  private Tag tag;
}
