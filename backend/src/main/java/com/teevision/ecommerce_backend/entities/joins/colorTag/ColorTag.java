package com.teevision.ecommerce_backend.entities.joins.colorTag;

import com.teevision.ecommerce_backend.entities.color.Color;
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

@Getter
@Setter
@RequiredArgsConstructor
@Entity
@Table(name = "color_tags")
public class ColorTag {

  @EmbeddedId
  private ColorTagId id;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "color_id")
  @MapsId("colorId")
  private Color color;

  @ManyToOne(fetch = FetchType.LAZY)
  @MapsId("tagId")
  private Tag tag;
}
